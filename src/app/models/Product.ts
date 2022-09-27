export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  option: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.url = '';
    this.description = '';
    this.option = 0;
  }
}

export const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
