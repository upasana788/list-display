import React, { useState, useEffect } from "react";
import { InfoCardProps } from "../model";

const InfoCard: React.FC<InfoCardProps> = ({ media }) => {
  const [imgSrc, setImgSrc] = useState(
    media.url || "https://dummyimage.com/150x150/000/fff"
  );

  const handleError = () => {
    setImgSrc("https://dummyimage.com/150x150/000/fff");
  };

  return (
    <div className="border rounded-lg p-4 shadow-md transition-all duration-300 shadow-gray-600 hover:scale-105">
      <img
        src={imgSrc}
        alt={media.title || "Image"}
        className="w-full h-48 object-cover rounded"
        onError={handleError}
      />
      <h3 className="mt-4 text-center font-bold text-blue-800 capitalize">
        {media.title}
      </h3>
    </div>
  );
};

export default InfoCard;
