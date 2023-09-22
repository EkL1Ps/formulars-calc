function formulaGerona(a, b, c) {
  const p = (a + b + c) / 2;
  const t = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  if (isNaN(t) || t < 0) {
    return "Can't be a number";
  } else {
    return t.toFixed(2);
  }
}
function PithagorasFormula(a, b) {
  const ab = Math.pow(a, 2) + Math.pow(b, 2);
  const c = Math.sqrt(ab);
  return c.toFixed(2);
}
function VietasFormula(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  const roots = [];

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(x1.toFixed(2), x2.toFixed(2));
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    roots.push(x.toFixed(2));
  } else {
    return ["Not have roots"];
  }
  return roots;
}
