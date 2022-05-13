export class FakeStore {

  static getProducts(): Promise<any> {
    return fetch('https://fakestoreapi.com/products').then(res=>res.json());
  }

  static getProduct(id: string): Promise<any> {
    return fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json());
  }

}
