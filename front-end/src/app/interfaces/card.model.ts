export interface ICard {
  title: string;
  counter: number;
  actions?: {
    href: string;
    text: string;
  }[];
  background?: string;
}
