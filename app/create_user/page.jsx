"use client"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {createUser} from "../api/api";
import { useState } from "react";
import EmailForm from "../components/form/emailForm";
import PhoneForm from "../components/form/phoneForm";
import PasswordForm from "../components/form/passwordForm";
import UserNameForm from "../components/form/userNameForm";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const defaultTheme = createTheme();


export default function SignIn() {

  let [password2, setPassword2] = useState({
    password2:"",
    error: false,
    mensaje: ""
  })

function validatePassword2(event) {
  const data = new FormData(event.currenttarget);
  let datos ={
    password: data.get('password'),
    cornifrm_password: data.get('confirm-password')
  };
    if (datos.password !== datos.cornifrm_password) {
      setPassword2({
        password2: "",
        error: true,
        mensaje: "Sus contraseñas no coinciden"
      })      
      event.preventDefault();
    }
}

const handleSubmit = async(event) => {
  // event.preventDefault()
  const data = new FormData(event.currentTarget);
  let datos ={
    name: data.get('name'),
    email: data.get('email'),
    phone: data.get('number'),
    password: data.get('password'),
  };
  
  validatePassword2(event)
  await createUser(datos)
};
return ( 
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an acount
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <UserNameForm/>
            <EmailForm/>
            <PhoneForm/>
            <PasswordForm/>
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm your password"
              type="password"
              id="confirm-password"
              helperText={password2.mensaje}
              error={password2.error}
              value={password2.number}
              onChange={(e) => setPassword2({
                password2: e.target.value
              })}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Ya tengo una cuenta. Ir al log in."}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
