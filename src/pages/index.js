import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import NavBar from '../components/NavBar';
import BookModal from '../components/BookModal';
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const handleView = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'publishedDate', headerName: 'Published Date', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleView(params.row)}>
          View
        </Button>
      ),
    },
  ];

  return (
    <Box>
      <NavBar />
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid rows={books} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
      </Box>
      {selectedBook && <BookModal open={modalOpen} handleClose={() => setModalOpen(false)} book={selectedBook} />}
    </Box>
  );
};

export default Home;

