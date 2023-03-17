import './PhonesPage.scss'
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { Catalog } from '../../components/Catalog';
import { Phone } from '../../types/Phone';
import { useEffect, useState } from 'react';
import { getPhones } from '../../api/phones';



export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getPhonesFromServer = async () => {
    setIsLoading(true);
    try {
      const phonesFromServer = await getPhones();
      setPhones(phonesFromServer.phones);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    <>
      <Breadcrumbs />
      <Catalog
      isLoading={isLoading}
      hasError={hasError}
      phones={phones}
      />
    </>
  )
}
