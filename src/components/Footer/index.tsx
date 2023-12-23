import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="py-4 text-center bg-primary text-white ">
      {" "}
      &copy; {year} coderamrin all right reserved
    </div>
  );
};

export default Footer;
