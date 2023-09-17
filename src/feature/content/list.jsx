import { createContext, useReducer } from "react";
import { listReducer, listInitialState  } from "../reducers/list";

export const ListContext = createContext();

function useListReduce(){
    const [ state, dispatch ] = useReducer(listReducer, listInitialState);

    const addToList = book => dispatch({
        type: "ADD_TO_LIST",
        payload: book
    })

    const clearList = () => dispatch({
        type: "CLEAR_LIST",
    })

    const removeFromList = book => dispatch({
        type: "REMOVE_FROM_LIST",
        payload: book
    })

    return { state, addToList, clearList, removeFromList, clearList };
}


export function ListProvider({children}){
    const { state, addToList, removeFromList, clearList } = useListReduce();
    return(
        <ListContext.Provider value={{
            list:state,
            addToList,
            clearList,
            removeFromList
        }}>
            { children }
        </ListContext.Provider>
    );
}
