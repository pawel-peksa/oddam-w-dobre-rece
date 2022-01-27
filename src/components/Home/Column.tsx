interface Props {
  number: number;
  title: string;
  description: string;
}

export const Column = ({number, title, description}: Props) => {
  return (
    <div className="column">
      <p className="number">{number}</p>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  )
};
