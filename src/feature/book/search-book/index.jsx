import React from 'react'
import { useFilters } from '../../hooks/useFilters';
import './search.css';

export function SearchBook() {
  const { setFilters, filters } = useFilters();

  const handleChangeTitle = (event) => {
    setFilters(prevState => ({
      ...prevState,
      search: event.target.value
    }))
  }
  return (
    <div>
        <input  type="serach" placeholder='Enter to "Title"' className='text-input' onChange={handleChangeTitle}/>
    </div>
  )
}
