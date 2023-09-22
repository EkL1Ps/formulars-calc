const inputA = document.querySelector(".js-number-a");
const inputB = document.querySelector(".js-number-b");
const inputC = document.querySelector(".js-number-c");
const selectOp = document.querySelector(".js-select-op");
const btnResult = document.querySelector(".js-btn-result");
const output = document.querySelector(".js-output");

btnResult.addEventListener("click", function () {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const c = Number(inputC.value);
  const operation = selectOp.value;

  const result = calculate({
    a,
    b,
    c,
    formula: operation,
  });
  output.innerHTML = result;
});
