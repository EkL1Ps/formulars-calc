const FORMULAS = {
  formulaGerona: "formulaGerona",
  PithagorasFormula: "PithagorasFormula",
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
    default:
      break;
  }
  return result;
}
