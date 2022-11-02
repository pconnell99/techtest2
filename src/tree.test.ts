import { strictEqual, throws } from "assert";
import { NodeFactory } from "./NodeTree/NodeFactory";

const nf = new NodeFactory();

// Testing the mechanisms of the arithmetic operator function
let tree1 = nf.getNode(
  "÷",
  nf.getNode("+", 7, nf.getNode("x", nf.getNode("-", 3, 2), 5)),
  6
);

strictEqual(
  tree1.toString(),
  "((7 + ((3 - 2) x 5)) ÷ 6)",
  "Arithmetic output should match (1)"
);
strictEqual(tree1.result(), 2, "Tree arithmetic result should be correct (1)");

// Secondary test for new Modulus operator implementation
let tree2 = nf.getNode("x", 8, nf.getNode("%", nf.getNode("-", 9, 3), 5));

strictEqual(
  tree2.toString(),
  "(8 x ((9 - 3) % 5))",
  "Arithmetic output should match (2)"
);
strictEqual(tree2.result(), 8, "Tree arithmetic result should be correct (2)");

// Test handling of bad operators
throws(() => {
  nf.getNode("bob", 8, nf.getNode("%", nf.getNode("-", 9, 3), 5)).result(),
    {
      message: "Unknown Node type.  Supported are + - x ÷ %",
    };
}, "Bad operators should throw an error");
