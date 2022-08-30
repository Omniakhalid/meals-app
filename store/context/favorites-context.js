import { createContext, useState } from "react";
//      1- create context to put data in it
export const FavoritesContext = createContext({
  //initial values
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

//      2- provide this context with its data to the components {value}
export default function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((current) => current !== id)
    );
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
