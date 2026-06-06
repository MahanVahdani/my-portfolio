"use client";

import React from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import "swiper/css";

type CarouselProps<T> = Omit<SwiperProps, "children"> & {
  data: T[];
  children: (item: T, index: number) => React.ReactNode;
  wrapperClassName?: string;
};

export default function Carousel<T>({
  data,
  children,
  wrapperClassName = "",
  ...swiperProps
}: CarouselProps<T>) {
  return (
    <div
      className={`w-full min-w-0 max-w-full overflow-hidden block ${wrapperClassName}`}
    >
      <Swiper {...swiperProps} className="mySwiper w-full">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="pb-12 pt-2 h-auto flex">
            <div className="w-full h-full flex flex-col">
              {children(item, index)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
