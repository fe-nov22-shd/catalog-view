import { Breadcrumbs } from '../Breadcrumbs';
import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { ProductInfoType } from '../../types/ProductInfoType';
import { ProductInfo } from '../../components/ProductInfo';
import { getProductInfo } from '../../api/getPhonesData';
import { getProductId } from '../../utils/getProductId';

export const ProductDetailsPage = () => {
  const [productInfo, setProductInfo] = useState<ProductInfoType | null>(null);

  const location = useLocation();
  const productId = getProductId(location.pathname);

  const getProductInfoFromServer = async () => {
    const productInfoFromServer = await getProductInfo(productId);

    setProductInfo(productInfoFromServer);
  };

  useEffect(() => {
    getProductInfoFromServer();
  }, []);

  useEffect(() => {
    getProductInfoFromServer();
  }, [productId]);

  return (
    <>
      <Breadcrumbs />
      {productInfo &&  <ProductInfo productInfo={productInfo} />}
    </>
  );
};
