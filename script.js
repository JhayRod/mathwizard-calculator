let display = document.getElementById("display");
let wizardText = document.getElementById("wizard-text");
let wizardImage = document.getElementById("wizard-image");

function appendValue(value) {
  hideWizardMessage();
  if (value === '√') {
    calculateSquareRoot();
  } else {
    display.value += value;
    showWizardMessage("Hmm, keep going!");
  }
}

function clearDisplay() {
  hideWizardMessage();
  display.value = '';
}

function calculate() {
  hideWizardMessage();
  try {
    display.value = eval(display.value);
    showWizardMessage("Good job!");
  } catch (error) {
    display.value = "Error!";
    showWizardError("What did you just do? Fix it!");
  }
}

function calculateSquareRoot() {
  try {
    let value = parseFloat(display.value);
    if (value < 0) {
      throw new Error();
    }
    display.value = Math.sqrt(value);
    showWizardMessage("Perfect, square root done!");
  } catch (error) {
    showWizardError("😡 Cannot calculate square root of a negative number!");
  }
}

function showWizardMessage(message) {
  wizardText.textContent = message;
  wizardText.classList.remove("hidden");
  wizardImage.style.animation = "shake 0.5s";
}

function showWizardError(message) {
  wizardText.textContent = message;
  wizardText.classList.remove("hidden");
  wizardImage.style.animation = "angry 0.5s";
}

function hideWizardMessage() {
  wizardText.classList.add("hidden");
  wizardImage.style.animation = "idle 2s infinite alternate";
}
