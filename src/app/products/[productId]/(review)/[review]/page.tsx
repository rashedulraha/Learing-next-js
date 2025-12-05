import React from "react";

const ReviewDetails = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  return (
    <div>
      <h2>Products Id productId Name {productId}</h2>
    </div>
  );
};

export default ReviewDetails;
