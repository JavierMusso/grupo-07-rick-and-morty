import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_FILTERED = "GET_CHARACTERS_FILTERED";
export const ADD_CHAR_SEARCH = "ADD_CHAR_SEARCH";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const REMOVE_ALL = "REMOVE_ALL";

// getRandomCharacters devuelve una lista de characters random.
export const getCharacters = (payload) => async (dispatch) => {
  // si le paso payload a getCharacters, busca esas IDs.
  // si NO le doy payload, busca characters random.
  if (payload) {
    try {
      let { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${payload}`
      );
      return dispatch({ type: GET_CHARACTERS, payload: data });
    } catch (err) {
      console.log(err);
    }
  }

  // if no payload, get random characters

  var AmountOfCharsToShow = 6;
  var TotalChars = 826;
  const getRandomId = () => {
    return Math.floor(Math.random() * TotalChars) + 1;
  };

  var IDs = [];

  const randomIDs = () => {
    if (IDs.length < AmountOfCharsToShow) {
      let newID = getRandomId();
      if (IDs.includes(newID)) {
        randomIDs();
      } else {
        IDs.push(newID);
      }
      randomIDs();
    }
  };

  // llamo a la funcion que me genera N IDs aleatorias.
  randomIDs();

  try {
    let { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${IDs}`
    );
    return dispatch({ type: GET_CHARACTERS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

// getCharactersFiltered va a devolver una lista de chars filtrados por la searchbar
export const getCharactersFiltered = (input, filters) => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/`,
      { params: { [filters[0]]: input } }
    );
    return dispatch({ type: GET_CHARACTERS_FILTERED, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const addCharacterFromSearch = (char) => {
  return { type: ADD_CHAR_SEARCH, payload: char };
};

// removeCharacter recibeun ID y lo remueve de la lista renderizada
export const removeCharacter = (payload) => {
  return { type: REMOVE_CHARACTER, payload: payload };
};

// removeAll saca todos los characters de la lista renderizada
export const removeAll = () => {
  return { type: REMOVE_ALL };
};
