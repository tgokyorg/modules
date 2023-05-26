import React, { useState, useCallback} from 'react';


const CountComponent = () => {
    const [items, setItems] = useState([
      { id: 1, name: 'Juice'},
      {id: 2, name: 'Banana'},
      { id: 3, name: 'Milk'}
    ]);

    const handleDelete = useCallback((itemId) => {
      setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }, [])


    return (
      <div>
        <h1>list of Items</h1>
        {items.map(item => (
          <Item key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </div>
    );

};

const Item = ({ item, onDelete}) => {
  const handleClick = useCallback(() => {
    onDelete(item.id);
  }, [onDelete, item.id]);

  return (
    <div>
      <span>{item.name}</span>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default CountComponent;