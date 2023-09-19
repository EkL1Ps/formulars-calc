function formulaGerona(a, b, c) {
  const p = (a + b + c) / 2;
  const t = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  if (t < 0) {
    return console.log("Невірно введені данні");
  } else {
    return t;
  }
}
function sum(a, b, c) {
  return a + b + c;
}
function VParallelepiped(a, b, c) {
  const V = a * b * c;
  return V;
}
