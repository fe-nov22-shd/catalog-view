import { Phone } from '../types/Phone';
import { ProductInfoType } from '../types/ProductInfoType';

const BASE_URL = 'https://catalog-api-mfo7.onrender.com/products';
const phone = '/phones';
const tablet = '/tablets';

type Props = {
  amount: number;
  phones: Phone[];
  productsByCategory: [];
};

export const getPhonesData = async (sortParam): Promise<Props> => {
  const response = await fetch(BASE_URL + phone + sortParam);

  return response.json();
};

export const getTabletsData = async (sortParam): Promise<Props> => {
  const response = await fetch(BASE_URL + tablet + sortParam);

  return response.json();
};

export const getProductInfo = async (
  productId: string
): Promise<ProductInfoType> => {
  const response = await fetch(BASE_URL + '/info/' + productId);

  return response.json();
};

export const getProductByProductId = async (
  productId: string
): Promise<Phone> => {
  const response = await fetch(BASE_URL + '/' + productId);

  return response.json();
};

export const getNewestPhones = async () => {
  const response = await fetch(BASE_URL + '/brand-new');

  return response.json();
};

export const getHotPricePhones = async () => {
  const response = await fetch(BASE_URL + '/hotprice');

  return response.json();
};

export const getRelevant = async (productId: string) => {
  const response = await fetch(BASE_URL + "/relevant/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });

  return response.json();
};
