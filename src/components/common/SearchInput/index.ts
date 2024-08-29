import SearchIcon from '../../../../assets/icons/searchIcon';
import DocumentElement from '../../../core/Element/DocumentElement';

const SearchInputComponent = (): HTMLElement => {
  const searchInputElement = DocumentElement({
    className: ['search__input-container'],
  });

  const inputElement = DocumentElement({
    tagElement: 'input',
    attributeList: [
      { name: 'type', value: 'text' },
      { name: 'placeholder', value: 'Search' },
    ],
  });

  const iconSearch = SearchIcon();
  console.log(iconSearch);

  searchInputElement.appendChild(inputElement);
  searchInputElement.appendChild(iconSearch);

  return searchInputElement;
};

export default SearchInputComponent;
