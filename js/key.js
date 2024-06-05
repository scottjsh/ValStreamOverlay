function setLanguage(language) {
  document.body.style.opacity = 0;

  setTimeout(function () {
    const texts = {
      en: {
        step1: "Step 1: Join the API Discord Server",
        step2: "Step 2: Verify Your User",
        step3: "Step 3: Go to the #Get-a-key Channel",
        step4: "Step 4: Click Generate",
        step5: "Step 5: Select Valorant",
        step6: "Step 6: Select Basic Key",
        step7:
          'Step 7: Fill the form as the following example and press "Send"',
        step8: "Step 8: You will receive your API key on your Discord DMs",
        step9: "Step 9: Use the generated key on the overlay page",
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
