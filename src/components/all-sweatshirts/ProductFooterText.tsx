import Link from "next/link";
import React from "react";

const ProductFooterText = () => {
  return (
    <>
    <div className="text-sm flex flex-col sm:flex-row gap-1 text-gray-700">
      <span className="flex gap-1">
        <p>Shop now. Pay in 30 days with Klarna</p>
        <p className="font-bold">Klarna</p> 
      </span>
      <Link className="text-gray-500 underline" href="#">Learn More</Link>
    </div>
    <p className="text-sm">Free shipping and returns on all orders.</p>
  </>
  );
};

export default ProductFooterText;




