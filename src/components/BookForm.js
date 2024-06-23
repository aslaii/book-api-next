import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const BookForm = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [publishedDate, setPublishedDate] = useState(book?.publishedDate || '');
  const [summary, setSummary] = useState(book?.summary || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = { title, author, publishedDate, summary };
    if (book) {
      await axios.put(`/api/books/${book.id}`, bookData);
    } else {
      await axios.post('/api/books', bookData);
    }
    onSubmit();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <TextField
        label="Published Date"
        value={publishedDate}
        onChange={(e) => setPublishedDate(e.target.value)}
        required
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <TextField label="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} required multiline rows={4} />
      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  );
};

export default BookForm;

