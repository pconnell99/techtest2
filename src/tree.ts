export interface INode {
  result(): any;
  toString(): string;
}

abstract class Node implements INode {
  protected leftVal: number;
  protected rightVal: number;
  protected leftString: string;
  protected rightString: string;
  constructor(left: Node | number, right: Node | number) {
    this.leftVal = typeof left === 'number' ? left : left.result();
    this.rightVal = typeof right === 'number' ? right : right.result();
    this.leftString =
      typeof left === 'object' ? left?.toString() : left.toString();
    this.rightString =
      typeof right === 'object' ? right?.toString() : right.toString();
  }
  public result(): any {}
  public toString(): string {
    return 'Unimplemented!';
  }
}

export class NodeAdd extends Node {
  public result(): any {
    return this.leftVal + this.rightVal;
  }
  public toString() {
    return `(${this.leftString.toString()} + ${this.rightString.toString()})`;
  }
}

export class NodeSubtract extends Node {
  public result() {
    return this.leftVal - this.rightVal;
  }
  public toString() {
    return `(${this.leftString.toString()} - ${this.rightString.toString()})`;
  }
}

export class NodeMultiply extends Node {
  public result() {
    return this.leftVal * this.rightVal;
  }
  public toString() {
    return `(${this.leftString.toString()} x ${this.rightString.toString()})`;
  }
}

export class NodeDivide extends Node {
  public result() {
    return this.leftVal / this.rightVal;
  }
  public toString() {
    return `(${this.leftString.toString()} ÷ ${this.rightString.toString()})`;
  }
}

export class NodeModulus extends Node {
  public result() {
    return this.leftVal % this.rightVal;
  }
  public toString() {
    return `(${this.leftString.toString()} % ${this.rightString.toString()})`;
  }
}
