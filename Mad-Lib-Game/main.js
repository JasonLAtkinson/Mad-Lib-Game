const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const BodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

const madLibDisplay = document.querySelector(".mad-lib");

const form = document.querySelector("form");

const story = `My Friends and I started a secret club! We meet everyday by the <b>${adj1}</b> <b>${noun1}</b>. Our club has some very special rules. If you want to join you have to wear <b>${adj2}</b> <b>${clothing}</b> on your <b>${bodyPart}.</b>
You are not allowed to <b>${verb1}</b> anyone during meetings, and you can only eat <b>${food}</b> for meals. If you're intrested in joining let me know.`;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (adj1.value == "") {
    alert(`${adj1.name} Must be filled out!`);
    adj1.focus();
  }  else if (noun1.value == "") {
    alert (`${noun1.name} Must be filled out!`);
    adj1.focus();
  }  else if (adj2.value == "") {
    alert (`${adj2.name} Must be filled out!`);
    adj1.focus();
  }  else if (clothing.value == "") {
    alert (`${clothing.name} Must be filled out!`);
    adj1.focus();
  }  else if (bodyPart.value == "") {
    alert (`${bodyPart.name} Must be filled out!`);
    adj1.focus();
  }  else if (verb1.value == "") {
    alert (`${verb1.name} Must be filled out!`);
    adj1.focus();
  }  else if (food.value == "") {
    alert (`${food.name} Must be filled out!`);
    adj1.focus();
  } 
  else{
    madLibStoryDisplay();
  }
});

function madLibStoryDisplay() {
  madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun1}`, noun1.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${bodyPart}`, bodyPart.value)
    .replace(`${verb1}`, verb1.value)
    .replace(`${food}`, food.value);
}
