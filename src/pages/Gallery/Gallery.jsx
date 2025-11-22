import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { injectStyles } from '../../styles/injectStyles';
import { theme } from '../../styles/theme';
import Section from '../../components/Section';

// Import gallery images
import img8 from '../../assets/images/gallery/8.png';
import img9 from '../../assets/images/gallery/9.png';
import img10 from '../../assets/images/gallery/10.png';
import img11 from '../../assets/images/gallery/11.png';
import img12 from '../../assets/images/gallery/12.png';
import img13 from '../../assets/images/gallery/13.png';
import img14 from '../../assets/images/gallery/14.png';
import img15 from '../../assets/images/gallery/15.png';
import img16 from '../../assets/images/gallery/16.png';

const galleryStyles = `
  .gallery-categories {
    display: flex;
    gap: ${theme.spacing[3]};
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: ${theme.spacing[8]};
  }

  .gallery-category-btn {
    padding: ${theme.spacing[3]} ${theme.spacing[6]};
    background: white;
    color: ${theme.colors.text.primary};
    border: 2px solid ${theme.colors.neutral[200]};
    border-radius: ${theme.borderRadius.full};
    font-weight: ${theme.typography.fontWeight.semibold};
    cursor: pointer;
    transition: all ${theme.transitions.fast};
  }

  .gallery-category-btn:hover {
    border-color: ${theme.colors.primary[400]};
    color: ${theme.colors.primary[600]};
  }

  .gallery-category-btn.active {
    background: ${theme.colors.primary[600]};
    color: white;
    border-color: ${theme.colors.primary[600]};
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .gallery-item {
    position: relative;
    border-radius: ${theme.borderRadius.xl};
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 4 / 3;
    background: ${theme.colors.neutral[100]};
    box-shadow: ${theme.shadows.md};
    transition: all ${theme.transitions.base};
  }

  .gallery-item:hover {
    box-shadow: ${theme.shadows.xl};
    transform: scale(1.02);
  }

  .gallery-item-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .gallery-item:hover .gallery-item-image {
    transform: scale(1.1);
  }

  .gallery-item-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
    padding: ${theme.spacing[4]};
    color: white;
    transform: translateY(100%);
    transition: transform ${theme.transitions.base};
  }

  .gallery-item:hover .gallery-item-overlay {
    transform: translateY(0);
  }

  .gallery-item-caption {
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.medium};
    margin: 0;
  }

  .gallery-lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: ${theme.zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing[4]};
    opacity: 0;
    visibility: hidden;
    transition: all ${theme.transitions.base};
  }

  .gallery-lightbox.active {
    opacity: 1;
    visibility: visible;
  }

  .gallery-lightbox-content {
    max-width: 90vw;
    max-height: 90vh;
    position: relative;
  }

  .gallery-lightbox-image {
    max-width: 100%;
    max-height: 90vh;
    border-radius: ${theme.borderRadius.xl};
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  }

  .gallery-lightbox-close {
    position: absolute;
    top: -${theme.spacing[12]};
    right: 0;
    background: white;
    color: ${theme.colors.text.primary};
    width: 40px;
    height: 40px;
    border-radius: ${theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: ${theme.typography.fontSize['2xl']};
    border: none;
  }

  .gallery-lightbox-caption {
    position: absolute;
    bottom: -${theme.spacing[12]};
    left: 0;
    right: 0;
    color: white;
    text-align: center;
    font-size: ${theme.typography.fontSize.lg};
  }

  .gallery-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.typography.fontSize['6xl']};
    background: linear-gradient(135deg, ${theme.colors.primary[100]} 0%, ${theme.colors.accent[100]} 100%);
  }
`;

const Gallery = () => {
  const { content } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    injectStyles(galleryStyles, 'gallery-styles');
  }, []);

  // Gallery items with imported images
  const galleryItems = [
    { category: 'farmhouses', caption: '', image: img8 },
    { category: 'plantation', caption: '', image: img9 },
    { category: 'drainage', caption: '', image: img10 },
    { category: 'roads', caption: '', image: img11 },
    { category: 'maps', caption: '', image: img12 },
    { category: 'farmhouses', caption: '', image: img13 },
    { category: 'plantation', caption: '', image: img14 },
    { category: 'drainage', caption: '', image: img15 },
    { category: 'roads', caption: '', image: img16 },
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'farmhouses', label: content.gallery.categories.farmhouses },
    { key: 'plantation', label: content.gallery.categories.plantation },
    { key: 'drainage', label: content.gallery.categories.drainage },
    { key: 'roads', label: content.gallery.categories.roads },
    { key: 'maps', label: content.gallery.categories.maps },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div id="gallery">
      <Section
        title={content.gallery.title}
        subtitle={content.gallery.subtitle}
        variant="primary"
        size="lg"
      >
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setLightboxImage(item)}
            >
              <img src={item.image} alt={item.caption} className="gallery-item-image" />
              {item.caption && (
                <div className="gallery-item-overlay">
                  <p className="gallery-item-caption">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      <div
        className={`gallery-lightbox ${lightboxImage ? 'active' : ''}`}
        onClick={() => setLightboxImage(null)}
      >
        {lightboxImage && (
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              ✕
            </button>
            <img src={lightboxImage.image} alt={lightboxImage.caption} className="gallery-lightbox-image" />
            <p className="gallery-lightbox-caption">{lightboxImage.caption}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
