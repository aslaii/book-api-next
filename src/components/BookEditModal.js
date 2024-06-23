import { Modal, Box, Typography } from '@mui/material';
import BookForm from './BookForm';

const BookEditModal = ({ open, handleClose, book, onSubmit }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Book
        </Typography>
        <BookForm book={book} onSubmit={onSubmit} />
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default BookEditModal;

