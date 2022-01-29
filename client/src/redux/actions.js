import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_RANDOM = "GET_RANDOM";
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

// removeCharacter recibeun ID y lo remueve de la lista renderizada
export const removeCharacter = (payload) => {
  return { type: REMOVE_CHARACTER, payload: payload };
};

// removeAll saca todos los characters de la lista renderizada
export const removeAll = () => {
  return { type: REMOVE_ALL };
};
