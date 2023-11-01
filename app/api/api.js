import axios from "axios";

export async function logIN(email, password) {
  console.log(email, password);
  const { data } = await axios.post(
    "http://localhost:3005/user/login",
    {
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  sessionStorage.setItem ("token", data)
  return data;
}

export async function createUser(datos) {
  console.log(datos);

  const { data } = await axios.post(
    "http://localhost:3005/user",
    datos,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  sessionStorage.setItem ("token", data)
  console.log(datos);
  return data;
}
