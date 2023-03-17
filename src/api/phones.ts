import { Phone } from "../types/Phone";

const BASE_URL = 'https://catalog-api-mfo7.onrender.com/phones';

export const getPhones = async (): Promise<Phone[]> => {
  const response = await fetch(BASE_URL);

  return response.json();
};
