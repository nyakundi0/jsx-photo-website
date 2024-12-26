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
  { type: 'video', src: video1, alt: 'Video 1', title: 'Stunning Timelapse', description: 'A beautiful timelapse of the city skyline.' },
  { type: 'video', src: video2, alt: 'Video 2', title: 'Nature in Motion', description: 'Capturing the serene beauty of nature in motion.' },
  { type: 'image', src: image1, alt: 'Image 1', title: 'Sunset Bliss', description: 'Capturing the serene beauty of a sunset over the ocean.' },
  { type: 'image', src: image2, alt: 'Image 2', title: 'Urban Exploration', description: 'Exploring the hidden gems of the city.' },
  { type: 'image', src: image3, alt: 'Image 3', title: 'Nature’s Majesty', description: 'A breathtaking view of the mountains.' },
  { type: 'image', src: image4, alt: 'Image 4', title: 'Wildlife Wonders', description: 'Close encounters with the animal kingdom.' },
  { type: 'image', src: image5, alt: 'Image 5', title: 'Architectural Marvels', description: 'Showcasing the beauty of modern architecture.' },
  { type: 'image', src: image6, alt: 'Image 6', title: 'Cultural Heritage', description: 'A glimpse into the rich cultural heritage of different regions.' },
  { type: 'image', src: image8, alt: 'Image 8', title: 'Portrait Perfection', description: 'Capturing the essence of human emotions.' },
  { type: 'image', src: image9, alt: 'Image 9', title: 'Adventure Awaits', description: 'Documenting thrilling adventures and expeditions.' },
  { type: 'image', src: image10, alt: 'Image 10', title: 'Underwater World', description: 'Exploring the vibrant life beneath the sea.' },
];

const OurWorks = () => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '300px',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto',
  };

  const videoStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '16px 0',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Works</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {works.map((item, index) => (
          <div key={index} style={cardStyle}>
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} style={imageStyle} />
            ) : (
              <video controls autoPlay loop muted style={videoStyle}>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <h3 style={titleStyle}>{item.title}</h3>
            <p style={descriptionStyle}>{item.description}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>Our Services</h2>
        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
          Our photography website offers a wide range of services to cater to all your photography needs. Whether you are looking for stunning portraits, breathtaking landscapes, or captivating event photography, we have got you covered. Our services include:
        </p>
        <ul style={{ listStyleType: 'none', padding: '0', fontSize: '1.2rem', color: '#555', maxWidth: '800px', margin: '20px auto' }}>
          <li>📸 Portrait Photography</li>
          <li>🌆 Urban and Street Photography</li>
          <li>🏞️ Landscape Photography</li>
          <li>🐾 Wildlife Photography</li>
          <li>🏛️ Architectural Photography</li>
          <li>🎉 Event Photography</li>
          <li>🌊 Underwater Photography</li>
          <li>🎥 Videography Services</li>
        </ul>
      </div>
    </div>
  );
};

export default OurWorks;