import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Result from "./components/Result";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [operator, setOperator] = useState([]);
  const [numerador, setNumerador] = useState([]);
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const opersArray = ["<", "/", "*", "-", "+"];
  const otherOpersArray = ["%", "CE", "C", "1/x", "x^2", "R"];
  let denominador = [];

  const handleClick = (number) => {
    setNumbers([...numbers, number]);
  };

  const handleClickOperators = (key) => {
    if (key == "<") {
      if (numbers.length > 0) {
        setNumbers(numbers.slice(0, -1));
      }
    } else if (key == "CE") {
      setNumbers([]);
      setNumerador([]);
      setOperator("");
    } else if (key == "C") {
      setNumbers([]);
    }else if(key == "1/x"){
      setNumerador([...numbers]);
      setOperator("**(-1)")
      setNumbers([]);
    }else if(key == "R"){
      setNumerador([...numbers]);
      setOperator("**(1/2)")
      setNumbers([]);
    } else if(key == "x^2"){
      setNumerador([...numbers]);
      setOperator("**(2)")
      setNumbers([]);
    }  
    else {
      setNumerador([...numbers]);
      setOperator(key);
      setNumbers([]);
    }
  };
  const handleClickDo = () => {
    denominador = numbers;
    console.log(numerador);
    console.log(denominador);
    console.log(operator);
    console.log(eval(`${numerador.join("")}${operator}${numbers.join("")}`));
    const result = eval(`${numerador.join("")}${operator}${numbers.join("")}`);
    setNumbers([result]);
  };

  return (
    <>
      <section className="result-display">
        <Result result={numbers}></Result>
      </section>

      <section className="calculator">
        <div className="left">
          <div className="others-box">
            {otherOpersArray.map((num) => (
              <Button
                key={num}
                number={num}
                handleClick={handleClickOperators}
              />
            ))}
          </div>

          <div className="numbers-box">
            {numberArray.map((num) => (
              <Button key={num} number={num} handleClick={handleClick} />
            ))}
          </div>
          <div className="others2-box">
            <Button key="+/-" number="+/-" handleClick={handleClickOperators} />
            <Button key={0} number={0} handleClick={handleClick} />
            <Button key="." number="." handleClick={handleClick} />
          </div>
        </div>

        <div className="operators-box">
          {opersArray.map((num) => (
            <Button key={num} number={num} handleClick={handleClickOperators} />
          ))}
          <Button key="=" number="=" handleClick={handleClickDo} />
        </div>
      </section>
    </>
  );
}

export default App;

/**
 * <section className="result-display">
        <Result result={numbers}></Result>
      </section> 
 * 
 * <Fila one="%" two="CE" third="C" four="<X)" ></Fila>
        <Fila one="1/x" two="x^2" third="RAIZ" four="/" ></Fila>
        <Fila one="7" two="8" third="9" four="X" ></Fila>
        <Fila one="4" two="5" third="6" four="-" ></Fila>
        <Fila one={1} two={2} third="3" four="+" ></Fila>
        <Fila one="+/-" two="0" third="," four="=" ></Fila>

        for (let entry of numerador) {
      if (i > 0) {
        num += ((entry * (10 ^ numerador.length)) / 10) * i;
      } else {
        num = numerador[0];
      }
      i++;
    }
    for (let entry of denominador) {
      if (j > 0) {
        den += ((entry * (10 ^ numerador.length)) / 10) * j;
      } else {
        den = denominador[0];
      }
      j++;
    }

    if (operator == "+") {
      total = num + den;
      console.log(total);
    }
 */
