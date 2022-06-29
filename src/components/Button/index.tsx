import React from 'react';
import './style.scss'

class Button extends React.Component{
  render(): React.ReactNode {
    return(
      <button className='botao'>
        Aperte aqui
      </button>
    )
  }
}


export default Button;