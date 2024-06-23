import { Modal, Box, Typography, Button } from '@mui/material';

const ConfirmDeleteModal = ({ open, handleClose, handleConfirm, bookTitle }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirm Delete
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete the book titled "{bookTitle}"?
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="error" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
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

export default ConfirmDeleteModal;

