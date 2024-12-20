import React from 'react';

// Importing all images and videos
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image8 from '../../assets/images/image8.jpg';
import image9 from '../../assets/images/image9.jpg';
import image10 from '../../assets/images/image10.jpg';
import video1 from '../../assets/images/video1.mp4';
import video2 from '../../assets/images/video2.mp4';

// Array of works with imported assets
const works = [
  { type: 'image', src: image1, alt: 'Image 1' },
  { type: 'image', src: image2, alt: 'Image 2' },
  { type: 'video', src: video1, alt: 'Video 1' },
  { type: 'video', src: video2, alt: 'Video 2' },
  { type: 'image', src: image3, alt: 'Image 3' },
  { type: 'image', src: image4, alt: 'Image 4' },
  { type: 'image', src: image6, alt: 'Image 6' },
  { type: 'image', src: image5, alt: 'Image 7' },
  { type: 'image', src: image8, alt: 'Image 8' },
  { type: 'image', src: image9, alt: 'Image 9' },
  { type: 'image', src: image10, alt: 'Image 10' },
  { type: 'image', src: image2, alt: 'Image 2 Duplicate' },
];

const OurWorks = () => {
  return (
    <div className="our-works-container">
      <h1 className="text-3xl font-bold mb-6">Our Works</h1>

      <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((item, index) => (
          <div key={index} className="work-item">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            ) : (
              <video controls className="w-full h-auto rounded-lg">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
