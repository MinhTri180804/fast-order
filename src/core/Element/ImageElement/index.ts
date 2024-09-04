import { ICoreElement } from '../../../types/core/element';

interface IImageElement extends ICoreElement {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

const ImageElement = ({
  src,
  alt = '',
  width,
  height,
}: IImageElement): HTMLElement => {
  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', src);
  imageElement.setAttribute('alt', alt);
  if (width) {
    imageElement.setAttribute('width', width);
  }

  if (height) {
    imageElement.setAttribute('height', height);
  }

  return imageElement;
};

export default ImageElement;
