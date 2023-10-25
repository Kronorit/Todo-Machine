import React from 'react';

function useLocalStorage(itemProp, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const savedItem = localStorage.getItem(itemProp);
        let parsedItem;
  
        if(savedItem) {
          parsedItem = JSON.parse(savedItem);
          setItem(parsedItem);
        }
        else {
          localStorage.setItem(itemProp, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
  
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);

  });

  function saveItem(newItem) {
    localStorage.setItem(itemProp, JSON.stringify(newItem));
    setItem(newItem);
  }
  
  return {item, saveItem, loading, error};
}

export { useLocalStorage };