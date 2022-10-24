export const Node = (operator: any, value: any, left?: any, right?: any) => {
  const result = function () {
    switch (operator) {
      case "+":
        return left.result() + right.result();
      case "-":
        return left.result() - right.result();
      case "x":
        return left.result() * right.result();
      case "÷":
        return left.result() / right.result();
      default:
        return value;
    }
  };

  const toString = function () {
    switch (operator) {
      case "+":
        return `(${left.toString()} + ${right.toString()})`;
      case "-":
        return `(${left.toString()} - ${right.toString()})`;
      case "x":
        return `(${left.toString()} x ${right.toString()})`;
      case "÷":
        return `(${left.toString()} ÷ ${right.toString()})`;
      default:
        return value.toString();
    }
  };

  return {
    result,
    toString,
  };
};
