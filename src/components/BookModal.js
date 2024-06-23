import { Modal, Box, Typography } from '@mui/material';

const BookModal = ({ open, handleClose, book }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {book.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {book.summary}
        </Typography>
        <Typography sx={{ mt: 2 }}>Author: {book.author}</Typography>
        <Typography sx={{ mt: 2 }}>Published Date: {book.publishedDate}</Typography>
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

export default BookModal;

