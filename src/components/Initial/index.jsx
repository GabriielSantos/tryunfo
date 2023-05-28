import PropTypes from 'prop-types';
import React, { Component } from 'react';
import logo from '../../media/images/logo3.png';
import Button from '../Button';
import './style.css';

export default class Initial extends Component {
  render() {
    const { startGame } = this.props;
    return (
      <section className="section__start">
        <section className="section__start--content">
          <img src={ logo } alt="logo" srcSet="" />
          <div className="welcome">
            <h3>Olá!</h3>
            <p>Este é um jogo no estilo Super Trunfo</p>
            <p>Você recebe uma carta e disputa contra o computador</p>
            <p>Escolhendo em qual categoria sua carta pode ter a maior pontuação</p>
          </div>
          <Button text="Iniciar" onClick={ startGame } />
        </section>
      </section>
    );
  }
}

Initial.propTypes = {
  startGame: PropTypes.func.isRequired,
};
