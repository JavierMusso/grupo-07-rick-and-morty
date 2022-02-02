import {
  ADD_CHAR_SEARCH,
  GET_CHARACTERS,
  GET_CHARACTERS_FILTERED,
  REMOVE_ALL,
  REMOVE_CHARACTER,
} from "./actions";

const initialState = {
  characters: [],
  filteredResults: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      if (payload.length > 1) {
        // tengo que comparar los id de payload con los id renderizados, para evitar repetidos

        // obtengo los IDs de ambos lados
        let IDsPayload = payload.map((char) => char.id);
        let IDsState = state.characters.map((char) => char.id);

        // mergeo los Characters de ambos arreglos, para luego obtener los que no se repitan
        let mergeChars = state.characters.concat(payload);

        // mergeo sin repetir los arreglos de IDs
        var mergeIDs = IDsState.concat(
          IDsPayload.filter((item) => IDsState.indexOf(item) < 0)
        );

        // mapeo las IDs, para obtener los characters correspondientes del arreglo de characters
        let newState = mergeIDs.map((id) =>
          mergeChars.find((char) => char.id === id)
        );

        return { ...state, characters: newState };
      }
      // filtro para saber si se repiten
      let noRepetidos = state.characters.filter(
        (char) => char.id !== payload.id
      );

      // si la lista de noRepetidos es mas corta que la lista de state, es porque payload se repetia, entonces devuelve el estado sin cambios
      if (noRepetidos.length === state.characters.length) {
        return { ...state, characters: payload };
      } else {
        return state;
      }

    case GET_CHARACTERS_FILTERED:
      return { ...state, filteredResults: payload.results };

    case ADD_CHAR_SEARCH:
      console.log(payload);
      //return { ...state, characters: state.characters.push(payload) };
      return { ...state, characters: [...state.characters, payload] };

    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter((char) => char.id !== payload),
      };

    case REMOVE_ALL:
      return { ...state, characters: [] };
    default:
      return state;
  }
};

export default rootReducer;
