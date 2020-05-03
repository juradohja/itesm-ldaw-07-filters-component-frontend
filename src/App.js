import React, {useState} from 'react';
import './App.css';
import ButtonFilter from "./components/ButtonFilter";
import RangeFilter from "./components/RangeFilter";
import Button from "./components/Button";

function App() {

  const formButtons = [
    {src : "img/Forma/redondo.png", label : "REDONDO"},
    {src : "img/Forma/princesa.png", label : "PRINCESA"},
    {src : "img/Forma/esmeralda.png", label : "ESMERALDA"},
    {src : "img/Forma/ovalo.png", label : "ÓVALO"},
    {src : "img/Forma/marquesa.png", label : "MARQUESA"},
    {src : "img/Forma/pera.png", label : "PERA"},
    {src : "img/Forma/asscher.png", label : "ASSCHER"},
    {src : "img/Forma/corazon.png", label : "CORAZÓN"},
    {src : "img/Forma/cojin.png", label : "COJÍN"},
    {src : "img/Forma/baguette.png", label : "BAGUETTE"},
    {src : "img/Forma/trillon.png", label : "TRILLÓN"},
    {src : "img/Forma/radiante.png", label : "RADIANTE"},
  ]

  const colorButtons = [
    {src : "img/Color/incoloro.png", label : "TRANSPARENTE"},
    {src : "img/Color/casi-incoloro.png", label : "CASI INCOLORO"},
    {src : "img/Color/ligeramente-amarillo.png", label : "LIGERAMENTE AMARILLO"},
    {src : "img/Color/amarillo-claro.png", label : "AMARILLO CLARO"},
  ]

  const clarityButtons = [
    {src : "img/Claridad/perfecta.png", label : "PERFECTA"},
    {src : "img/Claridad/imperfecciones-no-visibles.png", label : "IMPERFECCIONES NO VISIBLES"},
    {src : "img/Claridad/imperfecciones-10x.png", label : "IMPERFECCIONES VISIBLES A 10X"},
    {src : "img/Claridad/imperfecciones-simple-vista.png", label : "IMPERFECCIONES VISIBLES A SIMPLE VISTA"},
  ]

  const cutButtons = [
    {src : "img/Corte/excelente.png", label : "EXCELENTE (MÁXIMO BRILLO)"},
    {src : "img/Corte/muy-bueno.png", label : "MUY BUENO (MUY BRILLANTE)"},
    {src : "img/Corte/bueno.png", label : "BUENO (BRILLANTE)"},
    {src : "img/Corte/regular.png", label : "REGULAR (POCO BRILLANTE)"},
  ]

  const caratRange = {
    min : 0,
    max : 30,
    imageFrom : "img/Quilataje/pequeno.png",
    imageTo : "img/Quilataje/grande.png"
  }

  const priceRange = {
    min : 0,
    max : 5000000,
    imageFrom : "",
    imageTo : ""
  }

  const submitSearch = () => {
    let search = {
      "Forma" : form,
      "Color" : color,
      "Claridad" : clarity,
      "Corte" : cut,
      "Quilataje" : {
        "Desde" : carat.start,
        "Hasta" : carat.end
      },
      "Precio" : {
        "Desde" : price.start,
        "Hasta" : price.end
      }
    }
    console.log(search);
  }

  const cleanFilters = () => {
    setForm("");
    setColor("");
    setClarity("");
    setCut("");
    setCarat({
      start : caratRange.min,
      end : caratRange.max
    });
    setPrice({
      start : priceRange.min,
      end : priceRange.max
    })
  }

  const [form, setForm] = useState("");
  const [color, setColor] = useState("");
  const [clarity, setClarity] = useState("");
  const [cut, setCut] = useState("");
  const [carat, setCarat] = useState({
    start : caratRange.min,
    end : caratRange.max
  })
  const [price, setPrice] = useState({
    start : priceRange.min,
    end : priceRange.max
  })

  return (
    <div className="App container">
      <div className={"row"}>
        <div className={"col-6"}>
          <ButtonFilter title={"FORMA"}
                        buttons={formButtons}
                        tooltip={"Selecciona la forma del diamante."}
                        size={2}
                        state={form}
                        setState={setForm}/>
          <ButtonFilter title={"COLOR"}
                        buttons={colorButtons}
                        tooltip={"Selecciona el color del diamante."}
                        size={3}
                        state={color}
                        setState={setColor}/>
          <ButtonFilter title={"CLARIDAD"}
                        buttons={clarityButtons}
                        tooltip={"Selecciona la claridad del diamante."}
                        size={3}
                        state={clarity}
                        setState={setClarity}/>
        </div>
        <div className={"col-6"}>
          <ButtonFilter title={"CORTE"}
                        buttons={cutButtons}
                        tooltip={"Selecciona el corte del diamante."}
                        size={3}
                        state={cut}
                        setState={setCut}/>
          <RangeFilter title={"QUILATAJE"}
                       tooltip={"Selecciona el rango del quilataje del diamante."}
                       min={caratRange.min}
                       max={caratRange.max}
                       imageFrom={caratRange.imageFrom}
                       imageTo={caratRange.imageTo}
                       step={1}
                       state={carat}
                       setState={setCarat}/>
          <RangeFilter title={"PRECIO"}
                       tooltip={"Selecciona el precio del quilataje del diamante."}
                       min={priceRange.min}
                       max={priceRange.max}
                       imageFrom={priceRange.imageFrom}
                       imageTo={priceRange.imageTo}
                       step={100000}
                       state={price}
                       setState={setPrice}/>
        </div>
      </div>
     <div className={"row"}>
       <div className={"col"}>
         <Button label={"BUSCAR"} color={"blue"} submit={submitSearch}/>
         <Button label={"LIMPIAR FILTROS"} color={"white"} submit={cleanFilters}/>
       </div>
     </div>
    </div>
  );
}

export default App;
