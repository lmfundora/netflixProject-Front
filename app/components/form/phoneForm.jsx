import TextField from "@mui/material/TextField";
import { useState } from "react";


export default function PhoneForm() {

const validarPhone = ()=> {
  const regex = /^(\+\d{1,3}( )?)?((\(\d{1,3}\))|\d{1,3})[- .]?\d{3,4}[- .]?\d{4}$/;
    if (!regex.test(number.number)) {
      setNumber({
        number: "",
        error: true,
        mensaje: "Inserte un número válido"
      })      
    }else if (number.number.split('').length < 8 ) {
      setNumber({
        number: "",
        error: true,
        mensaje: "Su número debe tener más de 8 caracteres"
      })      
    }
}

  let [number, setNumber] = useState({
    number:"",
    error: false,
    mensaje: ""
  })

  return (
            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              label="Phone number"
              type="text"
              name="number"
              autoComplete="number"
              helperText={number.mensaje}
              error={number.error}
              value={number.number}
              onChange={(e) => setNumber({
                number: e.target.value
              })}
              onBlur={()=>validarPhone()}
              autoFocus
            />
  );
}

