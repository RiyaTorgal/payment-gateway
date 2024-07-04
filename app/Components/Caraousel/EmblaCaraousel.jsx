import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import EmblaCarousel from 'embla-carousel';
import './EmblaCaraousel.css';
import { ChevronLeft, ChevronRight } from "lucide"

const slides = [
  '/slide2.png',
  '/slide1.png',
  '/slide3.png',
  '/slide4.png'
];

const EmblaCaraousel = () => {
  const emblaRef = useRef(null);
  const [embla, setEmbla] = useState(null);

  useEffect(() => {
    const emblaInstance = EmblaCarousel(emblaRef.current, { loop: true });
    setEmbla(emblaInstance);
    return () => emblaInstance && emblaInstance.destroy();
  }, []);

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  return (
    <div className="carousel-container relative flex flex-col items-center">
      <div className="carousel relative">
        {' '}
        {/* Updated this line */}
        <button
          onClick={scrollPrev}
          className="prevButton p-2 bg-white rounded-full absolute top-1/2 left-4 transform -translate-y-1/2"
        >
          {/* <ChevronLeft /> */}
          Prev
        </button>
        <div ref={emblaRef} className="embla">
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollNext}
          className="nextButton p-2 bg-white rounded-full absolute top-1/2 right-4 transform -translate-y-1/2"
        >
          {/* <ChevronRight /> */}
          Next
        </button>
      </div>
    </div>
  );
};

export default EmblaCaraousel;