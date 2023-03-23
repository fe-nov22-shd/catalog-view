import { Breadcrumbs } from '../Breadcrumbs';
import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { ProductInfoType } from '../../types/ProductInfoType';
import { ProductInfo } from '../../components/ProductInfo';
import { getProductInfo } from '../../api/getProductsData';
import { getProductId } from '../../utils/getProductId';
import { getRelevant } from '../../api/getProductsData';
import { Phone } from '../../types/Phone';
import { Recommendation } from '../../components/Recommendation';

export const ProductDetailsPage = () => {
  const [productInfo, setProductInfo] = useState<ProductInfoType | null>(null);
  const [recommendation, setRecommendation] = useState<Phone[]>([]);

  const location = useLocation();
  const productId = getProductId(location.pathname);

  const getProductInfoFromServer = async () => {
    const productInfoFromServer = await getProductInfo(productId);
    const recommendedProducts = await getRelevant(productId);

    setRecommendation(recommendedProducts);
    setProductInfo(productInfoFromServer);
  };

  useEffect(() => {
    getProductInfoFromServer();
  }, []);

  useEffect(() => {
    getProductInfoFromServer();
  }, [productId]);

  return (
    <div className="product-details-page">
      <Breadcrumbs />
      {productInfo && <ProductInfo productInfo={productInfo} />}

      {recommendation.length > 0 && <Recommendation recommendation={recommendation} />
      }
    </div>
  );
};
