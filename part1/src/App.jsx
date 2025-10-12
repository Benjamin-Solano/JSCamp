// Desarrollo de componentes en React utilizando props para pasar datos
const Cabecera = (props) => {
  return (
    <h1><i>{props.curso}</i></h1>
  )
}

const Parte = (props) => {
  return (
    <h2> {props.parte} = {props.ejercicio}</h2>
  )
}

const Contenido = (props) => {
  return (
    <>
      <Parte parte={props.parte} ejercicio={props.ejercicio} />
    </>
  )
}

const totalEjercicios = (ex1, ex2, ex3) => {
  return (
    <div>
      <h3>Total de ejercicios: {ex1 + ex2 + ex3}</h3>
    </div>
  )
}

function App() {
  // Definición de variables para el curso y las partes
  const curso = "Half Stack application development"
  const parte1 = "Fundamentos de React"
  const ejercicio1 = 10
  const parte2 = "Usando props para pasar datos"
  const ejercicio2 = 7
  const parte3 = "Estado de un componente"
  const ejercicio3 = 14


  // aquí se pasa la prop curso al componente Cabecera,
  // aquí se pasan las props parte y ejercicio al componente Contenido, y
  // aquí se llama a la función totalEjercicios para mostrar el total de ejercicios.
  return (
    <>
      <div>
        <Cabecera curso={curso} />

        <Contenido parte={parte1} ejercicio={ejercicio1} />
        <Contenido parte={parte2} ejercicio={ejercicio2} />
        <Contenido parte={parte3} ejercicio={ejercicio3} />

        {totalEjercicios(ejercicio1, ejercicio2, ejercicio3)}
      </div>
    </>
  )
}

export default App