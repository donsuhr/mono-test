import React from 'react';
import ProductItem from './ProductItem';

const moduleThing = (input: string) => {
  return <ProductItem price={`hello world price: ${input}`} />;
};

export { moduleThing };
