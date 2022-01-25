interface Props {
  toDisplay: SingleItem[];
  itemsPerPage: number;
  setCurrentPage: (val: number) => void;
  currentPage: number;
}
interface SingleItem {
  name: string;
  description: string;
  itemsToCollect: string;
}

export const Pagination = ({
  toDisplay,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}: Props) => {
  const elements = toDisplay.map((singleItem, index) => {
    return (
      <li key={index}>
        <div>
          <h3>{singleItem.name}</h3>
          <p className="itemsToCollect">{singleItem.itemsToCollect}</p>
        </div>
        <p className="description">{singleItem.description}</p>
      </li>
    );
  });

  const lastElementIndex = currentPage * itemsPerPage;
  const firstElementIndex = lastElementIndex - itemsPerPage;

  const elementsToDisplay = elements.slice(firstElementIndex, lastElementIndex);
  const numberOfPages = Math.ceil(toDisplay.length / itemsPerPage);

  const pageButtons = [];
  for (let i = 0; i < numberOfPages; i++) {
    pageButtons.push(
      <button
        onClick={() => setCurrentPage(i + 1)}
        className={currentPage === i + 1 ? "active" : ""}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="pagination__wrapper">
      <ul className="listOfItems">{elementsToDisplay}</ul>
      {numberOfPages > 1 && <ul className="listOfButtons">{pageButtons}</ul>}
    </div>
  );
};
