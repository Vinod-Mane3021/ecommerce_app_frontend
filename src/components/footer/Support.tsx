import React from "react";
import ContactUsIcon from "../icons/ecommerce/ContactUsIcon";
import FreeReturn from "../icons/other/FreeReturnIcon";
import SecurePayment from "../icons/ecommerce/SecurePayment";
import ShippingIcon from "../icons/ecommerce/ShippingIcon";

const Support = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 px-4 md:px-8 lg:px-16 gap-y-10">
      <div className="flex flex-col items-center justify-center gap-1 hover:cursor-pointer">
        <ContactUsIcon heightWidth="23px" />
        <p className="text-xs text-darkGray">Contact Us</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 hover:cursor-pointer">
        <FreeReturn heightWidth="23px" />
        <p className="text-xs text-darkGray">Free Return</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 hover:cursor-pointer">
        <SecurePayment heightWidth="29px" />
        <p className="text-xs text-darkGray">Safe & Secure Payment</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 hover:cursor-pointer">
        <ShippingIcon heightWidth="34px" />
        <p className="text-xs text-darkGray">Shipping</p>
      </div>
    </div>
  );
};

export default Support;
