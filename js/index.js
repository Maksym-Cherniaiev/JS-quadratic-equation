const a = parseFloat(prompt("enter A value"));
const b = parseFloat(prompt("enter B value"));
const c = parseFloat(prompt("enter C value"));

function quadEqSolve(a, b, c) {
    const d = b * b - 4 * a * c;
    if (d < 0) {
        return "Equation Has No Solution";
    } else if (d >= 0) {
        const x1 = (- (b) - Math.sqrt(d)) / (2 * a);
        const x2 = (- (b) + Math.sqrt(d)) / (2 * a);
        return ("value x1 = " + x1 + " value x2 = " + x2);
    }
}

alert(quadEqSolve(a, b, c));