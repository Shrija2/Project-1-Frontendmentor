const skillImages = document.querySelectorAll(".skill-container img");
const skillSpans = document.querySelectorAll(".skill-container span");

dataHandle("data.json");

async function dataHandle(uri) {
  const skillsData = await fetch(uri);
  const res = await skillsData.json();

  for (let i = 0; i < res.length; i++) {
    skillImages[i].src = res[i].icon;
    skillSpans[i].innerHTML += `
            <span>${res[i].score} / 100</span>
          `;
  }
}
