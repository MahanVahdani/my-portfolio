"use client";

import SectionBlock from "@ui/SectionBlock";
import { MessageSquareQuote } from "lucide-react";
import Carousel from "../../layout/Carousel";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const TestimonialsSection = () => {
  return (
    <SectionBlock
      id="testimonials"
      icon={MessageSquareQuote}
      mutedTitle="What People"
      accentTitle="Say"
      description=""
    >
      <Carousel
        data={testimonials}
        wrapperClassName="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 1, spaceBetween: 40 },
          1280: { slidesPerView: 2, spaceBetween: 40 },
        }}
      >
        {(testimonial) => <TestimonialCard testimonial={testimonial} />}
      </Carousel>
    </SectionBlock>
  );
};

export default TestimonialsSection;
