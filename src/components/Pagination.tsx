interface Props {
  title?: string;
  mission?: string;
  itemsToCollect?: string;
  itemsPerPage?: number;
}
export const Pagination = ({
  title,
  mission,
  itemsToCollect,
  itemsPerPage,
}: Props) => {
  return (
    <ul>
      <li>item1</li>
      <li>item2</li>
    </ul>
  );
};
