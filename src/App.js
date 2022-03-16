import logo from './logo.svg';
import './App.css';
import CardContainer from './components/cardContainer/CardContainer';
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState({
    checkedOne: false,
    checkedTwo: false,
    checkedThree: false,
    checkedFour: false,
    checkedFive: false,
    checkedSixx: false
  })

  console.log(checked)

  const users = [
    {
      nombre: "user apellido apellido",
      tipo: "anfitrion",
      estado: "activo",
      validacion: "si",
    },
    {
      nombre: "user apellido apellido",
      tipo: "huesped",
      estado: "activo",
      validacion: "si",
    },
    {
      nombre: "user apellido apellido",
      tipo: "anfitrion",
      estado: "inactivo",
      validacion: "si",
    },
    {
      nombre: "user apellido apellido",
      tipo: "anfitrion",
      estado: "inactivo",
      validacion: "si",
    },
    {
      nombre: "user apellido apellido",
      tipo: "anfitrion",
      estado: "activo",
      validacion: "no",
    }
  ]

  const admins = [
    {
      nombre: "user apellido apellido",
      tipo: "anfitrion",
      estado: "activo",
      validacion: "si",
    },
    {
      nombre: "user apellido apellido",
      tipo: "huesped",
      estado: "activo",
      validacion: "si",
    },
    {
      nombre: "user apellido apellido",
      tipo: "anfitrion",
      estado: "inactivo",
      validacion: "si",
    },
    {
      nombre: "user apellido apellido",
      tipo: "anfitrion",
      estado: "inactivo",
      validacion: "si",
    },
    {
      nombre: "user apellido apellido",
      tipo: "anfitrion",
      estado: "activo",
      validacion: "no",
    }
  ]

  const filterUsers = users.filter((u) => checked.checkedOne && u.tipo === "huesped" || checked.checkedTwo && u.tipo === "anfitrion" || checked.checkedThree && u.estado === "activo" || checked.checkedFour && u.estado === "inactivo" || checked.checkedFive && u.validacion === "si" || checked.checkedSixx && u.validacion === "no")

  return (
    <div className="App">
      <h1>holi</h1> 
      <div className="containerCards">
        <CardContainer setChecked={setChecked} checked={checked} checkedOne={checked.checkedOne} checkedTwo={checked.checkedTwo} type={"Tipo"} titleOne="Anfitrión" titleTwo="Huésped" descriptionOne="Descripcion para anfitrion" descriptionTwo="Descripcion para huesped" />
        <CardContainer setChecked={setChecked} checked={checked} checkedThree={checked.checkedThree} checkedFour={checked.checkedFour} type={"Estado"} titleOne="Activo" titleTwo="Inactivo" descriptionOne="Descripcion para activo" descriptionTwo="Descripcion para inactivo" />
        <CardContainer setChecked={setChecked} checked={checked} checkedFive={checked.checkedFive} checkedSixx={checked.checkedSixx} type={"Validación"} />
      </div>
      <div className="containerUsers">
        { 
          filterUsers.length === 0 ? (
            users.map((u) => (
            <article>
            <p>{u.nombre}</p>
            <p>{u.tipo}</p>
            <p>{u.estado}</p>
            <p>{u.validacion}</p>
          </article>))
          ) : (
            filterUsers.map((u) => (
              <article>
              <p>{u.nombre}</p>
              <p>{u.tipo}</p>
              <p>{u.estado}</p>
              <p>{u.validacion}</p>
            </article>
          )))
        }
      </div>
    </div>
  );
}

export default App;
