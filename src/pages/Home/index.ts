import DocumentElement from '../../core/Element/DocumentElement';

const HomePage = (): HTMLElement => {
  const homePageElement = DocumentElement({
    tagElement: 'div',
    className: ['home__container'],
    children: [
      DocumentElement({
        tagElement: 'h1',
        textContent: 'Home Page',
      }),
      DocumentElement({
        tagElement: 'p',
        textContent: 'Welcome to Home Page',
      }),
    ],
  });

  return homePageElement;
};

export default HomePage;
