import React from "react";

const ProductsDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return <div>Dynamic product id {productId}</div>;
};

export default ProductsDetails;
