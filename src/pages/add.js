import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import BookForm from '../components/BookForm';
import { useRouter } from 'next/router';

const AddBook = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/');
  };

  return (
    <Box>
      <NavBar />
      <Box sx={{ p: 2 }}>
        <BookForm onSubmit={handleSubmit} />
      </Box>
    </Box>
  );
};

export default AddBook;

