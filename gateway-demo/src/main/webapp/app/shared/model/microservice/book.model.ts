export interface IBook {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
}

export const defaultValue: Readonly<IBook> = {};
