import React from 'react';
import './style.scss';

class Botao extends React.Component {
  render() {
    return (
      <button className="botao">
        {this.props.children}
      </button>
    )
  }
}

export default Botao;