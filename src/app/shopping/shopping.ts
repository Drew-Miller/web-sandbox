const clothingSizes = ['XS', 'S', 'M', 'L', 'XL'];
const shoeSizes = ['9', '9.5', '10', '10.5', '11', '11.5', '12'];

export type Size =
  | typeof clothingSizes[number]
  | typeof shoeSizes[number];

export type Product = {
  id: number,
  name: string,
  image: string,
  price: number,
  inStock: boolean,
  isFavorite: boolean,
  sizes: Size[]
};

export const simpleJacket: Product = {
  id: 1,
  name: 'Classic Utillity Jacket',
  image: '/assets/simple-jacket.jpg',
  price: 110,
  inStock: true,
  isFavorite: false,
  sizes: clothingSizes
};

export const kidsJumper: Product = {
  id: 2,
  name: 'Kids Jumper',
  image: '/assets/kids-jumper.jpg',
  price: 39,
  inStock: true,
  isFavorite: true,
  sizes: clothingSizes
};

export const fancySuitJacket: Product = {
  id: 3,
  name: 'Dogtooth Style Jacket',
  image: '/assets/fancy-suit-jacket.jpg',
  price: 350,
  inStock: true,
  isFavorite: false,
  sizes: clothingSizes
};

export const retroShoe: Product = {
  id: 4,
  name: 'Retro Shoe',
  image: '/assets/retro-shoe.jpg',
  price: 89,
  inStock: true,
  isFavorite: true,
  sizes: shoeSizes
};
