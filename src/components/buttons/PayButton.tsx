import React from "react";

interface PayButtonProps{
  handlePayment: () => void
}

const PayButton = ( { handlePayment } : PayButtonProps ) => {
  return (
    <button
      onClick={handlePayment}
      className="bg-darkGray text-lightGray border mt-3 border-transparent hover:border-gray-300 duration-300 hover:bg-white hover:text-darkGray w-fit self-center px-5 py-2 rounded-full"
    >
      Make Payment
    </button>
  );
};

export default PayButton;
