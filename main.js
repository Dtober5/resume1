document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = document.getElementById("dark-mode-toggle");
  icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Aspiring Full-Stack Developer",
    "Front-End Focused",
    "Creating Seamless UX"
  ];
  let currentPhrase = 0;
  let currentChar = 0;
  const typedText = document.getElementById("typed-text");

  function type() {
    if (currentChar < phrases[currentPhrase].length) {
      typedText.textContent += phrases[currentPhrase].charAt(currentChar);
      currentChar++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (currentChar > 0) {
      typedText.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
      currentChar--;
      setTimeout(erase, 50);
    } else {
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 200);
    }
  }

  type();
});

// Chart.js radar chart
const ctx = document.getElementById("skillsChart");
if (ctx) {
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["HTML", "CSS", "JavaScript", "SEO", "AutoCAD"],
      datasets: [{
        label: "Skill Level",
        data: [80, 75, 60, 65, 55],
        backgroundColor: "rgba(0,123,255,0.2)",
        borderColor: "rgba(0,123,255,1)",
        borderWidth: 2,
      }]
    },
    options: {
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });
}
