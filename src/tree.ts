abstract class Node {
  protected static value: any;
  protected static left: any;
  protected static right: any;
  constructor(left: Node | number, right: Node | number) {
    Node.left = typeof left === "number" ? left : left.result();
    Node.right = typeof right === "number" ? right : right.result();
    console.log("Root:", left, right);
  }
  public static result() {}
  public static toString() {}
}

export class NodeAdd extends Node {
  constructor(left: Node | number, right: Node | number) {
    super(left, right);
  }

  public result(): any {
    return Node.left + Node.right;
  }

  public toString() {
    return `(${Node.left.toString()} + ${Node.right.toString()})`;
  }
}

export class NodeSubtract extends Node {
  constructor(left: any, right: any) {
    super(left, right);
  }

  public result() {
    console.log("Subtract", Node.left.result(), Node.right.result());
    return Node.left.result() - Node.right.result();
  }

  public toString() {
    return `(${Node.left.toString()} - ${Node.right.toString()})`;
  }
}

export class NodeMultiply extends Node {
  constructor(left: any, right: any) {
    super(left, right);
  }

  public result() {
    console.log("Mult", Node.left.result(), Node.right.result());
    return Node.left.result() * Node.right.result();
  }

  public toString() {
    return `(${Node.left.toString()} * ${Node.right.toString()})`;
  }
}

export class NodeDivide extends Node {
  constructor(left: any, right: any) {
    super(left, right);
  }

  public result() {
    console.log("Div", Node.left.result(), Node.right.result());
    return Node.left.result() / Node.right.result();
  }

  toString() {
    return `(${Node.left.toString()} / ${Node.right.toString()})`;
  }
}

/*export const Node = (
  value: any,
  operator: any = "",
  left: any = null,
  right: any = null
) => {
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
*/
