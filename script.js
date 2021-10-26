"use-strict";

const loanAmt = document.getElementById("loanAmt");
const intRate = document.getElementById("intRate");
const tenure = document.getElementById("tenure");
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const msg = document.getElementById("emi");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!loanAmt.value || !intRate.value || !tenure.value) {
    msg.textContent = "Please recheck your details";
  } else {
    let emi =
      loanAmt.value *
      intRate.value *
      0.01 *
      (Math.pow(intRate.value * 0.01 + 1, tenure.value) /
        (Math.pow(intRate.value * 0.01 + 1, tenure.value) - 1));
    msg.textContent = `You have to pay ${emi.toFixed(3)} each month.`;
  }
});

reset.addEventListener("click", (e) => {
  e.preventDefault();

  loanAmt.value = " ";
  intRate.value = " ";
  tenure.value = " ";
  msg.textContent = " ";
});
