export interface IList {
  _id: string;
  title: string;
  description: string;
  buttons?: {
    text: string;
    color: string;
  }[];
}
