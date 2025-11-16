import React from "react";
import Image from "next/image";

type ServiceItemProps = {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
};

const ServiceItem = ({
  number,
  title,
  description,
  imageUrl,
}: ServiceItemProps) => {
  return (
    <div
      className="relative flex items-center
                 py-8 border-b border-white/20
                 group transition-all duration-300
                 hover:border-white/50" 
    >
      <div className="flex-1 grid grid-cols-1 md:grid-cols-10 items-center gap-4">
        <span className="text-xl font-semibold md:col-span-1 text-white/70">
          {number}
        </span>
        <h3 className="text-3xl md:text-4xl font-semibold md:col-span-4">
          {title}
        </h3>
        <p className="text-lg text-white/60 md:col-span-5">
          {description}
        </p>
      </div>


      <div
        className="absolute top-1/2 right-0 -translate-y-1/2
                   w-48 h-32 
                   opacity-0 scale-90 pointer-events-none
                   hidden lg:block 
                   lg:group-hover:opacity-100 lg:group-hover:scale-100
                   transition-all duration-300 ease-in-out
                   z-10"
      >
        <Image
          src={imageUrl}
          alt={`${title} preview`}
          fill
          className="object-cover rounded-lg border border-white/10"
        />
      </div>
    </div>
  );
};

export default ServiceItem;