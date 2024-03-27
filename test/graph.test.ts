import GraphLA from "../src/graph";

describe("Graph", () => {
  const graph = new GraphLA(1);

  test("Instancia", () => {
    expect(graph).toBeInstanceOf(graph);
  });
});
