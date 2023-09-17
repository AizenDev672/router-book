import React from 'react'
import { useList } from "../hooks/list";
import { IconRemove } from "../shared/Icons";
import "./list.css";

const WarningEmpty = () => {
    return (
        <>
            <span className='warning-empty'> No hay libros en la lista!  </span>
        </>
    );
}

const ListItems = ({ book }) => {
    const { removeFromList } = useList();
    return (
        <>
            {book.map((item, index) => (
                <div key={index} className='card-list'>
                    <img src={item.photo} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <small className='list-author'>{item.author}</small>
                    <button type='button' className='btn-remove' onClick={() => removeFromList(item)}> <IconRemove /> </button>
                </div>
            ))}
        </>
    )
}

export function List() {
    const { list } = useList();
    return (
        <>
            <aside className='list-aside'>
                {list.length > 0 ? <ListItems book={list} /> : <WarningEmpty />}
            </aside>
        </>
    )
}
