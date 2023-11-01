import TextField from "@mui/material/TextField";
import { useState } from "react";


export default function UserNameForm() {

const validarName = ()=> {
  const regex = /^[a-z0-9_-]{3,15}$/
  regex.test(name.name) ? null : setName({
    name: "",
    error: true,
    mensaje: "El nombre debe contener de 3 a 15 caracteres y sin mayúsculas"
  }) 

}

  let [name, setName] = useState({
    name:"",
    error: false,
    mensaje: ""
  })

  return (
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre de usuario"
              type="text"
              name="name"
              autoComplete="name"
              helperText={name.mensaje}
              error={name.error}
              value={name.name}
              onChange={(e) => setName({
                name: e.target.value
              })}
              onBlur={()=>validarName()}
              autoFocus
            />
  );
}

