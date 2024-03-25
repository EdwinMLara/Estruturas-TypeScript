import Stack from "../src/Stack";

describe("Probando la pila", () => {
  const stack = new Stack(1);

  test("Instancia", () => {
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.headS.head.data).toEqual(1);
  });

  test("Push", () => {
    stack.push(4);
    expect(stack.headS.head.data).toEqual(4);
  });

  test("Pop", () => {
    let data = stack.pop();
    expect(data).toEqual(4);
  });
});
