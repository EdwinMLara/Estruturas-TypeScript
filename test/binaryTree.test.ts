import BTree from "../src/binaryTree";

describe("BTree", () => {
  const tree = new BTree(2);

  test("Instancia", () => {
    expect(tree).toBeInstanceOf(BTree);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
    expect(tree.root.data).toEqual(2);
  });

  test("insert", () => {
    tree.insert(1);
    tree.insert(3);

    expect(tree.root.right?.data).toEqual(3);
    expect(tree.root.left?.data).toEqual(1);
  });
});
