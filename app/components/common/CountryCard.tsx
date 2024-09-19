import React from "react";
import Image from "next/image";

interface IProps {
  imageUrl: string;
  title: string;
}

function CountryCard({
  imageUrl,
  title,
}: IProps) {
  return (
    <div className="flex flex-col p-3 items-center  hover:shadow-2xl dark:hover:shadow-white rounded-2xl m-2">
        <div className="">
          <Image
            src={imageUrl}
            alt="country"
            width={300}
            height={200}
            className="rounded-[1rem]"
          />
        </div>
        <div className="w-full px-2 flex-end pt-10">
          <div className="text-center text-lightGray text-[1.125rem] font-bold">
            <p>{title}</p>
          </div>
        </div>
       
    </div>
  );
}

export default CountryCard;