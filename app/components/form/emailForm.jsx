import TextField from "@mui/material/TextField";
import { useState } from "react";


export default function EmailForm() {

const validarEmail = ()=> {
  const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  regex.test(email.email) ? null : setEmail({
    email: "",
    error: true,
    mensaje: "Inserte un correo válido"
  }) 
}

  let [email, setEmail] = useState({
    email:"",
    error: false,
    mensaje: ""
  })

  return (
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              helperText={email.mensaje}
              error={email.error}
              value={email.email}
              onChange={(e) => setEmail({
                email: e.target.value
              })}
              onBlur={()=>validarEmail()}
              autoFocus
            />
  );
}

