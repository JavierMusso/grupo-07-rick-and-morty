import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";

// getCharacters recibe un arreglo con IDs, y devuelve un array de objetos con los personajes correspondientes
export const getCharacters = (payload) => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${payload}`
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
