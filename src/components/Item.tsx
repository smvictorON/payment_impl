type ItemProps = {
  children: React.ReactNode,
  id: number
}

const Item = ({
  children,
  id,
}: ItemProps) => {
  return (
    <li>{children}-{id}</li>
  );
}

export default Item;
