import DocumentElement from '../../../core/Element/DocumentElement';

interface ICategoryTagProps {
  content: string;
}

function handleChoseCategory(e: Event): void {
  const target = e.target as HTMLElement;
  const tags = document.querySelectorAll('.category__tag');

  tags.forEach((tag) => {
    tag.classList.remove('active');
  });

  target.classList.add('active');
}

const CategoryTag = ({ content }: ICategoryTagProps): HTMLElement => {
  const element = DocumentElement({
    tagElement: 'div',
    className: ['category__tag'],
    handleClick: handleChoseCategory,
    textContent: content,
  });

  return element;
};

export default CategoryTag;
