import { strictEqual } from "assert";
import { Node } from "./tree";

// Testing the mechanisms of arithmetic operator function
let tree = Node(
  "÷",
  null,
  Node(
    "+",
    null,
    Node("", 7, null, null),
    Node(
      "x",
      null,
      Node(
        "-",
        null,
        Node("", 3, null, null),
        Node("", 2, null, null)
      ),
      Node("", 5, null, null)
    )
  ),
  Node("", 6, null, null)
);

strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
strictEqual(2, tree.result());
