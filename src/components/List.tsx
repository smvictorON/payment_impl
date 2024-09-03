import { useContext } from 'react';
import { DataContext } from '../context/provider';
import Item from './Item';

const List = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data && data.map((post: any) => (
        <Item id={post.id} key={post.id}>{post.title}</Item>
      ))}
    </ul>
  );
}

export default List;
