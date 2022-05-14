export class FakeStore {

  // eslint-disable-next-line
  static getProducts(): Promise<any> {
    return fetch('https://fakestoreapi.com/products').then(res=>res.json());
  }

  // eslint-disable-next-line
  static getProduct(id: string): Promise<any> {
    return fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json());
  }

}
