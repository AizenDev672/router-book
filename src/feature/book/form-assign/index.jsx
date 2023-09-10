import { useState } from "react";
import "./form.css";

const CalcutorPages = ({ result }) => {
  return(
    <div className="calcultor-pages">
        <span>Numero de paginas que debes de leer: <strong className="text-result">{ result }</strong></span>
    </div>
  );
};

export function FormAssign({ book }) {

  const [day, setDay] = useState({ day: 0 });
  const [ result, setResult ] = useState(null);

  const handleResult = () => {
    let result = book.numPages / day.day;

    setResult(result);
  }

  const handleChangeDay = (event) => {
    setDay({
      day: event.target.value
    })
  }

  return (
    <div className="container">
      <form className="flex-form">
        <div className="item-form">
          <label>Numero de paginas: {book.numPages}</label>
        </div>
        <div className="item-form">
          <label>Numero dias</label>
          <input type="number" className="text-input" onChange={handleChangeDay}/>
        </div>
        { result != null ? <CalcutorPages result={result} /> : "" }
        <div>
          <button type="button" onClick={handleResult} className="btn-calculator">Calcular</button>
        </div>
      </form>
    </div>
  );
}
