import TextField from "@mui/material/TextField";
import { useState } from "react";


export default function PasswordForm() {

const validarPassword = ()=> {
  const regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if (!regex.test(password.password)) {
      setPassword({
        password: "",
        error: true,
        mensaje: "Su contraseña debe contener al menos una mayúscula, una minúscula, un caracter especial y mínimo 8 caracteres"
      })      
    }}

  let [password, setPassword] = useState({
    password:"",
    error: false,
    mensaje: ""
  })

  return (
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={password.mensaje}
              error={password.error}
              value={password.number}
              onChange={(e) => setPassword({
                password: e.target.value
              })}
              onBlur={()=>validarPassword()}
              autoFocus
            />
  );
}

