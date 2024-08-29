import DocumentElement from '../../core/Element/DocumentElement';
import Footer from './Partials/Footer';
import Header from './Partials/Header';

interface IRootLayoutProps {
  children: Element[] | Element;
}

const RootLayout = ({ children }: IRootLayoutProps): HTMLElement[] => {
  // Implement your layout here
  const headerElement = Header();
  const footerElement = Footer();

  const mainElement = DocumentElement({
    tagElement: 'main',
    className: ['main__container'],
    children,
  });

  const rootLayout = [headerElement, mainElement, footerElement];
  return rootLayout;
};

export default RootLayout;
