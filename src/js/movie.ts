export class Movie {
  id: number;
  nameRus: string;
  nameEng: string;
  format: string;
  year: number;
  country: string;
  slogan: string;
  genre: string;
  duration: string;
  price: number;
  qty?: number;
  currency?: string;
  constructor(
    id: number,
    nameRus: string,
    nameEng: string,
    format: string,
    year: number,
    country: string,
    slogan: string,
    genre: string,
    duration: string,
    price: number
  ) {
    this.id = id;
    this.nameRus = nameRus;
    this.nameEng = nameEng;
    this.format = format;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.duration = duration;
    this.price = price;
    this.qty = 1;
    this.currency = "RUB";
  }
}

export function addFilmToCart(cart: Movie[], film: Movie) {
  if (cart.some((item: Movie) => item.id === film.id)) {
    throw new Error("Фильм уже в корзине");
  } else {
    cart.push(film);
  }
  return cart;
}
