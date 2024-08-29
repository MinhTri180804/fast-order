import SearchInputComponent from '../../../../components/common/SearchInput';
import DocumentElement from '../../../../core/Element/DocumentElement';

const Header = () => {
  const headerElement = DocumentElement({
    tagElement: 'header',
    className: ['header__container', 'container'],
  });

  const titlePageElement = DocumentElement({
    tagElement: 'div',
    className: ['title__page'],
    textContent: 'Home',
  });

  headerElement.appendChild(titlePageElement);
  headerElement.appendChild(SearchInputComponent());

  return headerElement;
};

export default Header;
