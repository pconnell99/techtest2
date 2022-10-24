import { strictEqual } from 'assert';
import {
  NodeAdd,
  NodeSubtract,
  NodeDivide,
  NodeMultiply,
  NodeModulus,
} from './tree';

// Testing the mechanisms of the arithmetic operator function
let tree1 = new NodeDivide(
  new NodeAdd(7, new NodeMultiply(new NodeSubtract(3, 2), 5)),
  6
);

strictEqual(tree1.toString(), '((7 + ((3 - 2) x 5)) ÷ 6)', 'Arithmetic output should match (1)');
strictEqual(tree1.result(), 2, 'Tree arithmetic result should be correct (1)');

// Secondary test for new Modulus operator implementation
let tree2 = new NodeMultiply(8, new NodeModulus(new NodeSubtract(9, 3), 5));

strictEqual(tree2.toString(), '(8 x ((9 - 3) % 5))', 'Arithmetic output should match (2)');
strictEqual(tree2.result(), 8, 'Tree arithmetic result should be correct (2)');
