import { Route, Routes } from "react-router-dom";
import { Header } from "./feature/shared/header";
import { Home } from "./feature/book/home";
import { SearchPage } from "./feature/book/search-page";
import { DetailBook } from "./feature/book/detail-book";
import {  AssignBook  } from "./feature/book/assign-book";
import { useFilters } from "./feature/hooks/useFilters";
import { fetchData } from "./feature/utils/fetchData";
import './App.css'

const apiData = fetchData("http://localhost:3000/books");

function App() {
  const data = apiData.read();
  const { filterBooks } = useFilters();

  const filteredBooks = filterBooks(data);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home books={filteredBooks} />}/>
        <Route path="/search-page" element={<SearchPage />}/>
        <Route path="/book-views/:id" element={<DetailBook />} />
        <Route path="/assign-book/:id" element={<AssignBook />}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </>
  )
}

export default App
