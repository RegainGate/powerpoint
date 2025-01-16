// JavaScript (script.js)
const steps = [
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQTQkfElicyXQ4ES72tn4XftAVA7nxG1QBCZ3JGx0YxWv8k",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQSw30ayuY2FSb60J2Ctn0mjAaKQsuiA4i7DPqIHiAOthdk",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQQlQabZ3dAOTaEcsh9esvceAXuJqzLu6PI7Em4f3_dK6bg",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQRgaQCBfl0oQbmG7fdEA6CRAVlAlXOpHOObAKoQskRgsKk",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQTzSUjONz79T4DVROJfNqM-ARpx_RABMY4xD7nad2wZVHM",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQQ8Os6IvGyjQIRiohNF2dN8AaYlbBVYKp5ExVR9jjOVV5Y"
];

const passwords = ["annpann", "sanndoitti", "siopann", "kurowassann", "meronnpann"];

let currentStep = 0;

const stepContent = document.getElementById("step-content");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const passwordInput = document.getElementById("password-input");

function updateStep() {
    stepContent.innerHTML = `<iframe src="${steps[currentStep]}" allowfullscreen></iframe>`;
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === steps.length - 1;
    passwordInput.value = ""; // パスワード入力をリセット
}

prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

nextBtn.addEventListener("click", () => {
    if (passwordInput.value === passwords[currentStep]) {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStep();
        }
    } else {
        alert("パスワードが間違っています。再試行してください。");
    }
});

// 初期化
updateStep();
