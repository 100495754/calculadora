import React from 'react'
import Button from './Button'
import './Fila.css'

function Fila(props) {
  return (
    <>
        <div className='fila'>
            <Button number={props.one} handleClick={props.handleClickOne} />
            <Button number={props.two} handleClick={props.handleClickTwo} />
            <Button number={props.third} handleClick={props.handleClickThree} />
            <Button number={props.four} handleClick={props.handleClickFour} />
        </div>
    </>
  )
}

export default Fila