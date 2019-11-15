import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {

  const [ storedValue, setStoredValue ] = useState(key, () => {

    const currentValue = localStorage.getItem(key);

    return currentValue ? JSON.parse(currentValue) : initialValue;
  })

  return [storedValue, setValue ]
}
