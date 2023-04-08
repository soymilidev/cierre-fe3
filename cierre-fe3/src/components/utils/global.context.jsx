import { createContext, useContext, useState, useEffect, useReducer } from "react";

export const initialState = { theme: "", data: [] }

export const ContextGlobal = createContext(undefined);


const themes = {
  dark: {
    theme: false,
    background: 'black',
    color: 'white'
  },
  light: {
    theme: true,
    background: 'white',
    color: 'black'
  }
}

const initialThemeState = themes.light
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_DARK':
      return themes.dark
    case 'SWITCH_LIGHT':
      return themes.light
    default:
      throw new Error('Error')
  }
}

const favReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return [...state, action.payload]
    default:
      throw new Error('Error')
  }
}

export const ContextProvider = ({ children }) => {
  // Dentistas API
  const [dentists, setDentists] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(err => console.log(err))
  }, [])


  //theme
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])

  const contextValues = { dentists, setDentists, themeState, themeDispatch, favState, favDispatch }

  return (
    <ContextGlobal.Provider value={contextValues}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);