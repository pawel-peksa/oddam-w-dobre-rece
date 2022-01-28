import { FunctionComponent, ReactElement } from "react";

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

export const Pagination: FunctionComponent<Props> = ({
  toDisplay,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}: Props) => {
  const elements: ReactElement[] = toDisplay.map((singleItem, index) => {
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

  const generateNumbers = () =>
    new Array(numberOfPages).fill(null).map((_, i) => (
      <button
        key={i + 1}
        onClick={() => setCurrentPage(i + 1)}
        className={currentPage === i + 1 ? "active" : ""}
      >
        {i + 1}
      </button>
    ));

  const pageButtons = [];
  for (let i = 0; i < numberOfPages; i++) {
    pageButtons.push(
      <button
        key={i + 1}
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
      {numberOfPages > 1 && (
        <ul className="listOfButtons">{generateNumbers()}</ul>
      )}
    </div>
  );
};
