// inputs
const inputBill = document.querySelector("#input-bill");
const numberPeople = document.querySelector("#number-people");

// button
const percentageFive = document.querySelector("#percentage-5");
const percentageTen = document.querySelector("#percentage-10");
const percentageFifteen = document.querySelector("#percentage-15");
const percentageTwentyFive = document.querySelector("#percentage-25");
const percentageFifty = document.querySelector("#percentage-50");
const reset= document.querySelector(".reset");
// span
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const custom = document.querySelector(".custom");

function calculateTip(percentage) {
  const bill = Number(inputBill.value);
  const people = Number(numberPeople.value);

  if (!bill || !people) {
    alert("Debes rellenar todos los campos");
    return;
  }

  // Si no estan vacios debemos hacer el calculo
  // (bill * 5/100) / people
  const result = (bill * (percentage/100)) / people;
  // total = bill + (bill * 0.05)
  const rtotal = (bill + bill *(percentage/100)) / people;

  tip.textContent = `S/ ${result.toFixed(2)}`;
  total.textContent = `S/ ${rtotal.toFixed(2)}`;
}

percentageFive.onclick = function () {
  calculateTip(5);
};

percentageTen.onclick = function () {
  calculateTip(10);
};
percentageFifteen.onclick = function () {
    calculateTip(15);
};
percentageTwentyFive.onclick = function () {
    calculateTip(25);
};
percentageFifty.onclick = function () {
    calculateTip(50);
};

reset.onclick=()=>{
    inputBill.value="";
    numberPeople.value="";
    tip.textContent="S/ 0.00";
    total.textContent="S/ 0.00";
    inputBill.focus();
    custom.value="";
}

