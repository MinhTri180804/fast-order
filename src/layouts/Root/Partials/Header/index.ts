import CategoryTag from '../../../../components/common/CategoryTag';
import SearchInputComponent from '../../../../components/common/SearchInput';
import DocumentElement from '../../../../core/Element/DocumentElement';

const Header = () => {
  const headerElement = DocumentElement({
    tagElement: 'header',
    className: ['header__container', 'container'],
  });

  const titleHeader = DocumentElement({
    tagElement: 'div',
    className: ['title__page'],
    textContent: 'Home',
  });

  const searchHeader = DocumentElement({
    tagElement: 'div',
    className: ['search__container'],
    children: [SearchInputComponent()],
  });

  headerElement.appendChild(titleHeader);
  headerElement.appendChild(searchHeader);

  return headerElement;
};

export default Header;
