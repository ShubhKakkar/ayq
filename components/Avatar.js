import React from "react";

const Avatar = ({ url, size }) => {
  return <img src={url} className={`rounded-full w-${size}`} alt="Avatar" />;
};

export default Avatar;
