import Queue from "../src/queque";

describe("probando la cola", () => {
  const queue = new Queue(1);

  test("Instancia", () => {
    expect(queue).toBeInstanceOf(Queue);
    expect(queue.headQ.head.data).toBe(1);
  });

  test("encolar", () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.headQ.head.data).toBe(1);
  });

  test("desenconlar", () => {
    let dato = queue.dequeue();
    expect(queue.headQ.head.data).toBe(2);
    expect(dato).toBe(1);
  });
});
