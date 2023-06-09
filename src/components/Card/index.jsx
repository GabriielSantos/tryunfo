import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

export default class Card extends Component {
  handleKeyDown = () => 0;

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isPreview,
      onRemoveClick,
      onAttrClick,
      computer,
    } = this.props;

    return (
      <div className="Card__container">
        { !isPreview
        && (
          <button
            className="delete-button"
            data-testid="delete-button"
            onClick={ onRemoveClick }
          >
            x
          </button>
        ) }
        <div className="Card">
          {computer && (
            <div className="CardPc">
              <h3 className="aviso">Clique no atributo na sua carta</h3>
            </div>
          )}
          {!computer && (
            <>
              <h3 data-testid="name-card">{cardName}</h3>
              <img
                data-testid="image-card"
                src={ cardImage }
                alt={ cardName }
                className="Card__img"
              />
              <p className="desc" data-testid="description-card">{cardDescription}</p>
              <section className="atributos">
                <div
                  className="attr"
                  onClick={ () => { onAttrClick('cardAttr1'); } }
                  onKeyDown={ this.handleKeyDown }
                  role="button"
                  aria-hidden
                >
                  <h3 data-testid="attr1-card">{cardAttr1}</h3>
                  <h5>Jogabilidade</h5>
                </div>
                <div
                  className="attr"
                  onClick={ () => { onAttrClick('cardAttr2'); } }
                  onKeyDown={ this.handleKeyDown }
                  role="button"
                  aria-hidden
                >
                  <h3 data-testid="attr2-card">{cardAttr2}</h3>
                  <h5>História</h5>
                </div>
                <div
                  className="attr"
                  onClick={ () => { onAttrClick('cardAttr3'); } }
                  onKeyDown={ this.handleKeyDown }
                  role="button"
                  aria-hidden
                >
                  <h3 data-testid="attr3-card">{cardAttr3}</h3>
                  <h5>Gráfico</h5>
                </div>
              </section>

              <h4
                data-testid="rare-card"
                className={ `rare-card ${cardRare.replace(' ', '')}` }
              >
                {cardRare}

              </h4>
              {
                cardTrunfo
                && (
                  <div data-testid="trunfo-card" className="img_trunfo">
                    {/* <img src={ logo2 } alt="" className="img_trunfo" /> */}
                    {/* <p className="trunfo-text">Super Trunfo</p> */}
                  </div>
                )
              }
            </>
          )}
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  onRemoveClick: () => {},
  onAttrClick: () => {},
  computer: false,
};

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isPreview: PropTypes.bool.isRequired,
  onRemoveClick: PropTypes.func,
  onAttrClick: PropTypes.func,
  computer: PropTypes.bool,
};
