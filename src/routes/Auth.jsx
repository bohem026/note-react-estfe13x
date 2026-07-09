import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function Auth() {
  const [newAccount, setNewAccount] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  console.log(form);

  return (
    <>
      <Typography variant="h2" component="h2">
        Login Form
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField fullWidth label="Email address" type="email" name="email" variant="outlined" />
        <TextField fullWidth label="Password" type="password" name="password" variant="outlined" sx={{ mt: 2 }} />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </>
  );
}

export default Auth;
