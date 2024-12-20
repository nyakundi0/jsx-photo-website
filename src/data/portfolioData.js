// src/data/portfolioData.js
import UrbanPortrait from '../assets/images/urban_portrait.jpg'; // Adjust the path based on your folder structure
import ProductLaunch from '../assets/images/product_launch.jpg';
import Wilderness from '../assets/images/wilderness.jpg';
import CorporateEvent from '../assets/images/corporate_event.jpg';
import FashionShot from '../assets/images/fashion_shot.jpg';
import BrandStory from '../assets/images/brand_story2.jpg';

export const portfolioItems = [
  { id: 1, category: 'portrait', imageUrl: UrbanPortrait, title: 'Urban Portrait' },
  { id: 2, category: 'commercial', imageUrl: ProductLaunch, title: 'Product Launch' },
  { id: 3, category: 'nature', imageUrl: Wilderness, title: 'Wilderness' },
  { id: 4, category: 'events', imageUrl: CorporateEvent, title: 'Corporate Event' },
  { id: 5, category: 'portrait', imageUrl: FashionShot, title: 'Fashion Shot' },
  { id: 6, category: 'commercial', imageUrl: BrandStory, title: 'Brand Story' },
];

export const services = [
  {
    title: 'Portrait Photography',
    description: 'Capture personality and essence with professional portrait photography. We create stunning portraits that highlight your best features, perfect for personal, professional, or branding use.',
    icon: '📸',
    imageUrl: '../assets/images/urban_portrait.jpg', // Replace with the correct image path
  },
  {
    title: 'Commercial Photography',
    description: 'High-quality product and brand photography to enhance your business. From product shots to lifestyle images, we create visuals that will engage your audience and elevate your brand.',
    icon: '🎯',
    imageUrl: '../assets/images/product_launch.jpg', // Replace with the correct image path
  },
  {
    title: 'Event Coverage',
    description: 'Comprehensive photography services for your special occasions and events. Whether it’s a corporate event, wedding, or party, we capture every moment in high resolution to tell your story.',
    icon: '✨',
    imageUrl: '../assets/images/corporate_event.jpg', // Replace with the correct image path
  },
  {
    title: 'Fashion Photography',
    description: 'Fashion photography that tells a story. We work with models, designers, and brands to create stunning visuals that highlight fashion and lifestyle in all its forms.',
    icon: '👗',
    imageUrl: '../assets/images/fashion_shot.jpg', // Replace with the correct image path
  },
  {
    title: 'Brand Story Photography',
    description: 'Visual storytelling for your brand. We specialize in creating narratives around your brand identity, connecting with customers through emotionally engaging visuals.',
    icon: '📝',
    imageUrl: 'brand_story.jpg', // Replace with the correct image path
  },
];
