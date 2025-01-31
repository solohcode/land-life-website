import React from "react";

const ImageSlider = ({ images, speed = 20 }) => {
  console.log(images);
  return (
    <div className="overflow-hidden relative mt-4">
      {/* Scrolling container */}
      <div
        className="flex w-max hover:animate-none"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {/* Duplicate images to create seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="h-16 w-32 flex-shrink-0 mx-4 flex items-center justify-center"
            title={image.name}
          >
            <img
              src={image.img}
              alt={`Logo ${index}`}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
