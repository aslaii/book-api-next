import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Book Management by Jericho Bermas
        </Typography>
        <Button color="inherit" component={Link} href="/">Home</Button>
        <Button color="inherit" component={Link} href="/add">Add Book</Button>
        <Button color="inherit" component={Link} href="/edit">Edit Books</Button>
        <Button color="inherit" component="a" href="http://localhost:3001/api-docs" target="_blank" rel="noopener noreferrer">
            API Documentation
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

