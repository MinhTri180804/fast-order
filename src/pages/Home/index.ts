import CategoryTag from '../../components/common/CategoryTag';
import DocumentElement from '../../core/Element/DocumentElement';

const HomePage = (): HTMLElement => {
  const tagsCategory = DocumentElement({
    tagElement: 'div',
    className: ['tags__category-section'],
    children: [
      CategoryTag({ content: 'All' }),
      CategoryTag({ content: 'All' }),
      CategoryTag({ content: 'All' }),
      CategoryTag({ content: 'All' }),
    ],
  });

  const homePageElement = DocumentElement({
    tagElement: 'div',
    className: ['home__container', 'container'],
    children: [tagsCategory],
  });

  return homePageElement;
};

export default HomePage;
