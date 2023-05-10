import PropTypes from 'prop-types';
import React from 'react';
import '../css/Card.css';

class Card extends React.Component {
  render() {
    // const { cardInfo } = this.props;
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="card">
        <p data-testid="name-card">{ cardName }</p>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        <p data-testid="description-card">{ cardDescription }</p>

        <div className="atributos">
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </div>

        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo && (<span data-testid="trunfo-card">Super Trunfo</span>)}
      </div>
    );
  }
}

Card.propTypes = {
  // cardInfo: PropTypes.shape({
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  // isSaveButtonDisabled: PropTypes.bool.isRequired,
  // }).isRequired,
};

export default Card;
