import { Phone } from '../types/Phone';
import {ProductInfoType} from '../types/ProductInfoType';

const BASE_URL = 'https://catalog-api-mfo7.onrender.com/phones';
type Props = {
  amount: number,
  phones: Phone[],
}
export const getPhonesData = async (sortParam): Promise<Props> => {
  const response = await fetch(BASE_URL + sortParam);

  return response.json();
};

export const getProductInfo = async (productId: string): Promise<ProductInfoType> => {
  const response = await fetch(BASE_URL + '/info/' + productId);

  return response.json();
};
