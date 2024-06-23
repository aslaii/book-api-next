import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import NavBar from '../components/NavBar';
import BookEditModal from '../components/BookEditModal';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
// delete icon and edit icon
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const EditBooks = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [ bookToDelete, setBookToDelete ] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const handleEditClick = (book) => {
    setSelectedBook(book);
    setEditModalOpen(true);
  };

  const handleEditSubmit = async () => {
    const response = await axios.get('/api/books');
    setBooks(response.data);
    setEditModalOpen(false);
  };

  const handleDeleteClick = (book) => {
    setBookToDelete(book);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    await axios.delete(`/api/books/${bookToDelete.id}`);
    const response = await axios.get('/api/books');
    setBooks(response.data);
    setDeleteModalOpen(false);
    setBookToDelete(null);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'publishedDate', headerName: 'Published Date', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 250,
      renderCell: (params) => (
        <>
          <Button variant="contained" color="primary" onClick={() => handleEditClick(params.row)}>
            <EditIcon />
          </Button>
          <Button variant="contained" color="error" onClick={() => handleDeleteClick(params.row)} sx={{
            marginLeft: 1
          }}>
            <DeleteIcon />
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box>
      <NavBar />
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid rows={books} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
      </Box>
      {selectedBook && (
        <BookEditModal
          open={editModalOpen}
          handleClose={() => setEditModalOpen(false)}
          book={selectedBook}
          onSubmit={handleEditSubmit}
        />
      )}
    {bookToDelete && (
      <ConfirmDeleteModal
        open={deleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
        handleConfirm={handleDeleteConfirm}
        bookTitle={bookToDelete.title}
        />
    )}
    </Box>
  );
};

export default EditBooks;

