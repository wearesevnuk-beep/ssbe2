
import React, { useState, useEffect, useCallback } from 'react';

interface Slide {
  title: string;
  description: string;
  image: string;
  tag: string;
}

const slides: Slide[] = [
  {
    title: "Music Production",
    description: "Young people learn the art of sound engineering, beat making, and creative expression in our dedicated studio space.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    tag: "Creative Arts"
  },
  {
    title: "Professional Photography",
    description: "Capturing the world through a lens. Students develop technical skills in lighting, composition, and digital editing.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    tag: "Digital Media"
  },
  {
    title: "Hair & Beauty",
    description: "Practical training in styling and aesthetics, building the confidence and professional standards required for the industry.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    tag: "Vocational"
  }
];

const PathwayCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-6xl mx-auto group">
      <div className="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[16/9] sm:aspect-[21/9] relative bg-ssbe-dark">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-16 text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-ssbe-purple text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                {slide.tag}
              </span>
              <h3 className="text-3xl sm:text-5xl font-black mb-4 italic text-ssbe-gold">{slide.title}</h3>
              <p className="text-gray-200 text-sm sm:text-lg max-w-xl font-medium leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-ssbe-purple"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-ssbe-purple"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index ? 'w-12 h-2 bg-ssbe-purple' : 'w-2 h-2 bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PathwayCarousel;
