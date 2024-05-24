export default interface CarPrice {
  chart?: Chart[] | null;
  related?: Related[] | null;
}
interface Chart {
  price: number;
  date: string;
}
interface Related {
  title: string;
  image: string;
  price: number;
  delta: string;
  up: boolean;
}
