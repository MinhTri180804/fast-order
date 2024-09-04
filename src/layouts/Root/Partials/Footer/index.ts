import DocumentElement from '../../../../core/Element/DocumentElement';

interface IFooterProps {}

const Footer = (): HTMLElement => {
  const footerElement = DocumentElement({
    tagElement: 'footer',
    className: ['footer__container', 'container'],
    textContent: 'Footer',
  });

  return footerElement;
};

export default Footer;
