document.addEventListener("DOMContentLoaded", () => {

  // bubbles (keep as is)
  for (let i = 0; i < 18; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const size = Math.random() * 40 + 20;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = Math.random() * 6 + 6 + "s";
    bubble.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(bubble);
  }

  const resultBox = document.getElementById("resultBox");
  if (!resultBox) return;

  const result = resultBox.dataset.result;

  // 🎊 PASS → falling happy emojis
  if (result === "PASS") {
    for (let i = 0; i < 20; i++) {
      createFallingEmoji("😄");
    }
  }

  // 😢 FAIL → falling sad emojis
  if (result === "FAIL") {
    for (let i = 0; i < 20; i++) {
      createFallingEmoji("😢");
    }
  }

  function createFallingEmoji(symbol) {
    const emoji = document.createElement("div");
    emoji.className = "falling-emoji";
    emoji.textContent = symbol;

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 7000);
  }

});
