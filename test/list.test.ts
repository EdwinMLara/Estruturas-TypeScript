import LinkedList from "../src/list";

describe("Probando lista", () => {
  const list = new LinkedList(1);

  test("Instancia", () => {
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toEqual({ data: 1, next: null });
  });

  test("Insertar al inicio", () => {
    list.insertFirst(2);
    expect(list.head).toEqual({ data: 2, next: { data: 1, next: null } });
  });

  test("Insertar al final", () => {
    list.insertLast(3);
    expect(list.head.data).toBe(2);
    let aux = list.head.next;
    expect(aux?.data).toBe(1);
    aux = aux?.next;
    expect(aux?.data).toBe(3);
  });

  test("Tamaño", () => {
    expect(list.size()).toBe(3);
  });

  test("Eliminar primero", () => {
    let deleted = list.deleteFirst();
    expect(list.head.data).toBe(1);
    expect(list.size()).toBe(2);
    expect(deleted).toBe(2);
  });

  test("elminar", () => {
    let deleted = list.delete(3);
    expect(list.size()).toBe(1);
    expect(deleted).toBe(true);
  });

  test("elminar duplicados", () => {
    list.insertFirst(2);
    list.insertLast(1);
    list.removeDuplicates();
    expect(list.size()).toBe(2);
  });
});
