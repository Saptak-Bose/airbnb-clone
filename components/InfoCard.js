/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div>
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>

      <div>
        <div className="flex justify-between">
            <p>{location}</p>
            <HeartIcon className="h-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
