import { Buyable, Cart } from "../cart";

describe("Cart", () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test("adding items to the cart", () => {
    const item: Buyable = { id: 1, name: "Movie A", price: 10 };
    cart.add(item);
    expect(cart.getItems()).toContainEqual(item);
  });

  test("deletion items from the cart by id", () => {
    const item: Buyable = { id: 1, name: "Movie A", price: 10 };
    cart.add(item);
    cart.deleteFromCart(1);
    expect(cart.getItems()).not.toContainEqual(item);
  });

  test("deletion items from the cart by without id", () => {
    expect(() => cart.deleteFromCart(999)).toThrow(
      "Item with id 999 not found"
    );
  });

  test("calculation total cost", () => {
    cart.add({ id: 1, name: "Movie A", price: 10 });
    cart.add({ id: 2, name: "Movie B", price: 20 });
    expect(cart.getCost()).toBe(30);
  });

  test("calculation total cost with discount", () => {
    cart.add({ id: 1, name: "Movie A", price: 100 });
    expect(cart.getCostWithDiscount(10)).toBe(90);
  });

  test("error for invalid discount values", () => {
    cart.add({ id: 1, name: "Movie A", price: 100 });
    expect(() => cart.getCostWithDiscount(-5)).toThrow(
      "Discount must be between 0 and 100"
    );
    expect(() => cart.getCostWithDiscount(105)).toThrow(
      "Discount must be between 0 and 100"
    );
  });
});
