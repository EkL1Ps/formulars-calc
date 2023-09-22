const FORMULAS = {
  formulaGerona: "formulaGerona",
  PithagorasFormula: "PithagorasFormula",
  VietasFormula: "VietasFormula",
};

function calculate({ a, b, c, formula }) {
  let result = null;

  switch (formula) {
    case FORMULAS.formulaGerona:
      result = formulaGerona(a, b, c);
      break;
    case FORMULAS.PithagorasFormula:
      result = PithagorasFormula(a, b);
      break;
    case FORMULAS.VietasFormula:
      result = VietasFormula(a, b, c);
      break;
    default:
      break;
  }
  if (typeof result === "number") {
    result = result.toFixed(2);
  }

  return result;
}
