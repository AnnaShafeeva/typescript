export class Movie {
  constructor(
    public id: number,
    public nameRus: string,
    public nameEng: string,
    public format: string,
    public year: number,
    public country: string,
    public slogan: string,
    public genre: string,
    public duration: string,
    public price: number,
    readonly qty: number = 1,
    readonly currency: string = "RUB"
  ) {}
}

export function addFilmToCart(cart: Movie[], film: Movie) {
  if (cart.some((item: Movie) => item.id === film.id)) {
    throw new Error("Фильм уже в корзине");
  } else {
    cart.push(film);
  }
  return cart;
}
