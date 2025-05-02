export interface Buyable {
  id: number;
  name: string;
  price: number;
  discount?: number;
}

export class Cart {
  private items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }

  getItems(): Buyable[] {
    return this.items;
  }

  getCost(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getCostWithDiscount(discount: number): number {
    if (discount < 0 || discount > 100) {
      throw new Error("Discount must be between 0 and 100");
    }
    const total = this.getCost();
    return total - (total * discount) / 100;
  }

  deleteFromCart(id: number): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      throw new Error(`Item with id ${id} not found`);
    }
  }
}
