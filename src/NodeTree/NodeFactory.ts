/** Simple factory handler for node requests */
import {
  INode,
  NodeAdd,
  NodeDivide,
  NodeModulus,
  NodeMultiply,
  NodeSubtract,
} from "./NodeTypes";

export class NodeFactory {
  constructor() {}
  public getNode(nodeType: string, left: any, right: any): INode {
    let _choice: INode;
    switch (nodeType) {
      case "+":
        _choice = new NodeAdd(left, right);
        break;
      case "-":
        _choice = new NodeSubtract(left, right);
        break;
      case "x":
        _choice = new NodeMultiply(left, right);
        break;
      case "÷":
        _choice = new NodeDivide(left, right);
        break;
      case "%":
        _choice = new NodeModulus(left, right);
        break;
      default:
        throw new Error("Unknown Node type.  Supported are + - x ÷ %")
    }
    return _choice;
  }
}
