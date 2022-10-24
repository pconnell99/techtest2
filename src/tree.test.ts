import { strictEqual } from "assert";
import { NodeAdd, NodeSubtract, NodeDivide, NodeMultiply } from "./tree";

// Testing the mechanisms of arithmetic operator function
let tree = new NodeDivide(
  new NodeAdd(7, new NodeMultiply(new NodeSubtract(3, 2), 5)),6);

strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
strictEqual(2, tree.result());
