import React from 'react';

import { contentImages, ContentImagesProps } from '../../assets/assets';

interface ContentBlockProps {
  image: string;
  imageFirst: boolean;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  image,
  imageFirst,
  children,
}) => {
  return (
    <div
      className={`c-content-block ${
        imageFirst ? 'c-content-block--image-first' : ''
      }`}
    >
      <div className="c-content-block__text">{children}</div>
      <img
        className="c-content-block__image"
        alt={image}
        src={(contentImages as ContentImagesProps)[image]?.src}
      />
    </div>
  );
};
