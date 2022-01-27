interface Props {
  title: string;
  description: string;
  src: string;
  alt: string;
}

export const ColumnStep = ({title, description, src, alt}:Props) => {
  return (
  <div className="columnStep">
    <img alt={alt} src={src}/>
    <p>{title}</p>
    <hr/>
    <p>{description}</p>
  </div>
  )
};
