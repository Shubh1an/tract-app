import React from "react";

const Avatar = ({ img, className, alt, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={img} alt={alt} className={className} />
    </div>
  );
};

export default Avatar;
