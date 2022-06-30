import React from 'react';
import style from './botao.module.scss'

class Button extends React.Component{
  render(): React.ReactNode {
    return(
      <button className={style.botao}>
        Aperte aqui
      </button>
    )
  }
}


export default Button;