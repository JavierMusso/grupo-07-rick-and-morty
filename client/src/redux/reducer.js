import { GET_CHARACTERS, REMOVE_ALL, REMOVE_CHARACTER } from "./actions";

const initialState = [];

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      if (payload.length > 1) {
        // tengo que comparar los id de payload con los id renderizados, para evitar repetidos

        // obtengo los IDs de ambos lados
        let IDsPayload = payload.map((char) => char.id);
        let IDsState = state.map((char) => char.id);

        // mergeo los Characters de ambos arreglos, para luego obtener los que no se repitan
        let mergeChars = state.concat(payload);

        // mergeo sin repetir los arreglos de IDs
        var mergeIDs = IDsState.concat(
          IDsPayload.filter((item) => IDsState.indexOf(item) < 0)
        );

        // mapeo las IDs, para obtener los characters correspondientes del arreglo de characters
        let newState = mergeIDs.map((id) =>
          mergeChars.find((char) => char.id === id)
        );

        return newState;
      }
      // filtro para saber si se repiten
      let noRepetidos = state.filter((char) => char.id !== payload.id);

      // si la lista de noRepetidos es mas corta que la lista de state, es porque payload se repetia, entonces devuelve el estado sin cambios
      if (noRepetidos.length === state.length) {
        //console.log("char no se repite");
        return [...state, payload];
      } else {
        //console.log("char repetido");
        return state;
      }
    //return [...state, payload];

    case REMOVE_CHARACTER:
      return state.filter((char) => char.id !== payload);

    case REMOVE_ALL:
      return [];
    default:
      return state;
  }
};

export default rootReducer;
