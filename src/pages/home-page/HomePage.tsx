import React from 'react';
import { useGetAllProductsQuery } from '../../API/productsAPI';

const HomePage: React.FC = () => {
  const { data, isLoading } = useGetAllProductsQuery(10);
  return <div>{data && data.map(({ idProduct }) => idProduct)}</div>;
};

export default HomePage;
