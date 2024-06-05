function setLanguage(language) {
  document.body.style.opacity = 0;

  setTimeout(function () {
    const texts = {
      en: {
        step1: "Step 1: Join the API Discord Server",
        step2: "Step 2: Verify User",
        step3: "Step 3: Go to the #Get-a-key Channel",
        step4: "Step 4: Click Generate",
        step5: "Step 5: Select Valorant",
        step6: "Step 6: Select Basic Key",
        step7:
          'Step 7: Fill the form as the following example and press "Send"',
        step8: "Step 8: You will receive your API key on your Discord DMs",
        step9: "Step 9: Use the generated key on the overlay page",
      },
      kr: {
        step1: "Step 1: API 디스코드 서버에 참가하세요",
        step2: "Step 2: 사용자 인증하세요",
        step3: "Step 3: #Get-a-key 채널로 이동하세요",
        step4: "Step 4: Generate를 클릭하세요",
        step5: "Step 5: Valorant를 선택하세요",
        step6: "Step 6: Basic Key를 선택하세요",
        step7: 'Step 7: 아래 예시와 같이 양식을 작성하고 "Send"를 누르세요',
        step8: "Step 8: API 키가 디스코드 DM으로 전송됩니다",
        step9: "Step 9: 생성된 키를 오버레이 페이지에 사용하세요",
      },
    };

    const instructions = {
      en: {
        step1:
          '<a href="https://discord.gg/X3GaVkX2YN" target="_blank" rel="noopener">Click here to join the Discord server</a>',
        step2:
          "Complete the captcha on the #Verify channel to verify your user.",
        step3: "Locate the #Get-a-key channel in the Discord server.",
        step4: "",
        step5: "",
        step6: "",
        step7: "",
        step8: "",
        step9: "",
      },
      kr: {
        step1:
          '<a href="https://discord.gg/X3GaVkX2YN" target="_blank" rel="noopener">여기를 클릭하여 디스코드 서버에 참가하세요</a>',
        step2: "#Verify 채널에서 캡차를 완료하여 사용자를 인증하세요.",
        step3: "디스코드 서버에서 #Get-a-key 채널을 찾으세요.",
        step4: "",
        step5: "",
        step6: "",
        step7: "",
        step8: "",
        step9: "",
      },
    };

    const steps = document.querySelectorAll(".step");

    steps.forEach((step, index) => {
      const stepNumber = index + 1;
      step.querySelector(`h2`).textContent =
        texts[language][`step${stepNumber}`];
      step.querySelector(`p`).innerHTML =
        instructions[language][`step${stepNumber}`];
      if (stepNumber > 3) {
        const image = step.querySelector(`img`);
        image.src = "./img/" + stepNumber + ".png";
        image.alt = `Step ${stepNumber}`;
      }
    });

    document.querySelector(".language-container").style.display = "none";
    document.querySelector(".guide-container").style.display = "block";
    document.body.style.opacity = 1;
  }, 1000);
}
