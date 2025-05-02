import { Movie, addFilmToCart } from "../movie";

test("adding film to cart", () => {
  const cart: Movie[] = [];
  const film: Movie = {
    id: 1,
    nameRus: "Мстители",
    nameEng: "The Avengers",
    format: "IMAX",
    year: 2012,
    country: "США",
    slogan: "Avengers Assemle!",
    genre: "фантастика, боевик, фэнтези, приключения",
    duration: "137 мин./02:17",
    price: 10,
  };
  addFilmToCart(cart, film);
  expect(cart).toContain(film);
});

test("adding duplicate film to cart", () => {
  const cart: Movie[] = [];
  const film: Movie = {
    id: 1,
    nameRus: "Мстители",
    nameEng: "The Avengers",
    format: "IMAX",
    year: 2012,
    country: "США",
    slogan: "Avengers Assemle!",
    genre: "фантастика, боевик, фэнтези, приключения",
    duration: "137 мин./02:17",
    price: 10,
  };
  addFilmToCart(cart, film);
  expect(() => addFilmToCart(cart, film)).toThrow("Фильм уже в корзине");
});
