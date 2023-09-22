function formulaGerona(a, b, c) {
  const p = (a + b + c) / 2;
  const t = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  if (t < 0) {
    console.log("Невірно введені данні");
  } else {
    return t;
  }
}
function PithagorasFormula(a, b) {
  const ab = Math.pow(a, 2) + Math.pow(b, 2);
  const c = Math.sqrt(ab);
  return c;
}
