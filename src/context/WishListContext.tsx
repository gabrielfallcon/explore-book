import { createContext, ReactNode, useState } from 'react';


interface WishListProviderProps {
  children: ReactNode
}

interface WishListContextData {
  dataWish: Object[];
  addToWishList: (data: Object[], id: string) => void;
  removeToWishList: (id: string) => void;
}

export const WishListContext = createContext<WishListContextData>(
  {} as WishListContextData
);

export function WishListProvider({ children }: WishListProviderProps) {
  const [dataWish, setDataWish] = useState([]);

  const addToWishList = (data, id) => {
    setDataWish(
      [...dataWish, 
        {
          items: data, 
          id 
        }
      ]
    );
  }

  const removeToWishList = (id) => {
    setDataWish(dataWish.filter(book => {
      if (book?.id !== id) return book
    }))
  }

  return (
    <WishListContext.Provider value={{ dataWish, addToWishList, removeToWishList }}>
      {children}
    </WishListContext.Provider>
  )
}