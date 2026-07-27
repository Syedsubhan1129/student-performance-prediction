from flask import Flask, render_template, request, redirect
import joblib
import numpy as np
import pandas as pd
app = Flask(__name__)
model=joblib.load('student_RFc_model.pkl')
@app.route('/', methods=['GET', 'POST'])
def home():
    result = None
    if request.method == "POST":
        study_hrs = float(request.form["study_hrs"])
        attendance = float(request.form["attendance"])
        class_part = float(request.form["class_part"])

        user_df = pd.DataFrame([[study_hrs, attendance, class_part]],
                               columns=['weekly_self_study_hours','attendance_percentage','class_participation'])
        prediction = model.predict(user_df)
        if prediction[0] == 1:
            result = "The student is likely to pass."
        else:
            result = "The student is likely to fail."
    
    return render_template('index.html', result=result)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)