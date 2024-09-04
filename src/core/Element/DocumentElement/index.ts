import { ICoreElement } from '../../../types/core/element';

interface IDocumentElement extends ICoreElement {
  tagElement?: string;
  children?: Element[] | Element;
  textContent?: string;
  redirect?: string;
  href?: string;
  handleClick?: (e: Event) => void;
}

const DocumentElement = ({
  tagElement = 'div',
  attributeList,
  children,
  textContent,
  redirect,
  href,
  className,
  id,
  handleClick,
}: IDocumentElement): HTMLElement => {
  const element = document.createElement(tagElement);

  //   Check if element has className will be add for it
  if (className) {
    element.classList.add(...className);
  }

  //   Check if element has id will be add for it
  if (id) {
    element.id = id;
  }

  //   Check if element is a element will be add option for it
  if (tagElement === 'a') {
    if (redirect) {
      element.setAttribute('target', '_blank');
    }

    if (href) {
      element.setAttribute('href', href);
    }
  }

  // Set attribute for element
  if (attributeList) {
    attributeList.forEach((attribute) => {
      element.setAttribute(attribute.name, attribute.value);
    });
  }

  //   Check if element has children element will be append for it
  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        element.appendChild(child);
      });
    } else {
      element.appendChild(children);
    }
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (handleClick) {
    element.addEventListener('click', handleClick);
  }

  return element;
};

export default DocumentElement;
