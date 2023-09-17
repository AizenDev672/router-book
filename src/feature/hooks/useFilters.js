import { useContext  } from "react";
import { FiltersContext } from "../content/filter";
import { fetchData } from "../utils/fetchData";

const apiData = fetchData("http://localhost:3000/books");

export function useFilters(){
    const data = apiData.read();
    const { filters, setFilters  } = useContext(FiltersContext);

    const filterBooks = (books) => {
        if(filters.search != "All"){
            return books.filter((book) => { return ( book.title === filters.search ) });
        }else{
            return books.filter((book) => { return ( book.genre !== "All" ) });
        }
    }

    const queryBook = (id) => {
        return data.filter((item) => {
            return( item.id === Number(id))
        })
    }

    return { filters, filterBooks, setFilters, queryBook };
}