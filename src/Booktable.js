import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Booktable.css';

function Booktable() {
  const [books, setBooks] = useState([]);
  const [searchTermTitle, setSearchTermTitle] = useState('');
  const [searchTermDesc, setSearchTermDesc] = useState('');
  const [searchTermAuthor, setSearchTermAuthor] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(5);

  function handleReset(event) {
    setSearchTermDesc("");
    setSearchTermAuthor("");
    setSearchTermTitle("");
  }

  function handleSubmit() {
    console.log("Thank you");
  }

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClose = () => {
    setSelectedBook(null);
  };

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/delete/${id}`)
      .then(res => {
        if (res.data === 'Error') {
          console.error('Error deleting record:', res.data);
        } else {
          setBooks(prevBooks => prevBooks.filter(book => book.bookid !== id));
        }
      })
      .catch(err => console.error(err))
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books
    .filter(book =>
      book.bname.toLowerCase().includes(searchTermTitle.toLowerCase()) &&
      book.subject.toLowerCase().includes(searchTermDesc.toLowerCase()) &&
      book.author.toLowerCase().includes(searchTermAuthor.toLowerCase())
    )
    .slice(indexOfFirstBook, indexOfLastBook);

  // Logic to paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Change number of items per page
  const handleChangeItemsPerPage = (itemsPerPage) => {
    setBooksPerPage(itemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  return (
    <div class="root">
      <div>
        <div className=' container mx-auto px-4 mt-5 '>
          <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <div className="absolute flex items-center ml-2 h-full">
                  {/* ... (your search icon SVG) ... */}
                </div>
                <input
                  type="text"
                  name="searchkeyTitle"
                  id="searchkeyTitle"
                  placeholder="Search by title..."
                  value={searchTermTitle}
                  onChange={(e) => { setSearchTermTitle(e.target.value) }}
                  className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
                />

                <input
                  type="text"
                  name="searchkeyDesc"
                  id="searchkeyDesc"
                  placeholder="Search by genre..."
                  value={searchTermDesc}
                  onChange={(e) => { setSearchTermDesc(e.target.value) }}
                  className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
                />

                <input
                  type="text"
                  name="searchkeyAuthor"
                  id="searchkeyAuthor"
                  placeholder="Search by author..."
                  value={searchTermAuthor}
                  onChange={(e) => { setSearchTermAuthor(e.target.value) }}
                  className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <button className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" >
                  Search
                </button>
                <button onClick={handleReset} className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" >
                  Reset Filter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='root-container'>
        <Link to="/addbooks" className="btn btn-success mb-4">Add Book</Link>
        <div className="table-container">
          <Table bordered>
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Author</th>
                <th>Publish Date</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBooks.map((book, i) => (
                <tr key={i} className="fade-in">
                  <td>{book.bname}</td>
                  <td>{book.author}</td>
                  <td>{book.pdate}</td>
                  <td>{book.subject}</td>
                  <td>{book.rating}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => handleDelete(book.bookid)}>Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="pagination">
            <select onChange={(e) => handleChangeItemsPerPage(parseInt(e.target.value))}>
              <option value="5">5 per page</option>
              <option value="10">10 per page</option>
              <option value="15">15 per page</option>
            </select>
            {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, i) => (
              <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booktable;
