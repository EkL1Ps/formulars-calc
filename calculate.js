const FORMULAS = {
  formulaGerona: "geron",
  sum: "+",
  VParallelepiped: "VParallelepiped",
};

function calculate({ a, b, c, formula }) {
  let result = null;

  switch (formula) {
    case FORMULAS.formulaGerona:
      result = formulaGerona(a, b, c);
      break;
    case FORMULAS.sum:
      result = sum(a, b, c);
      break;
    case FORMULAS.VParallelepiped:
      result = VParallelepiped(a, b, c);
      break;
    default:
      break;
  }
  return result;
}
