import { strictEqual } from "assert";
import { Node } from "./tree";

// Testing the mechanisms of arithmetic operator function
let tree = Node(
  null,
  "÷",
  Node(
    null,
    "+",
    Node(7),
    Node(null, "x", Node(null, "-", Node(3), Node(2)), Node(5))
  ),
  Node(6)
);

strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
strictEqual(2, tree.result());
