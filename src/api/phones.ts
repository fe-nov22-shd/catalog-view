import { Phone } from "../types/Phone";
type PromiseType = {
  amount: number,
  phones: Phone[]
}

const BASE_URL = 'https://catalog-api-mfo7.onrender.com/products/phones';

export const getPhones = async (): Promise<PromiseType> => {
  const response = await fetch(BASE_URL);
  return response.json();
};
