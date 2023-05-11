import PropTypes from 'prop-types';
import React from 'react';
import '../css/Card.css';

class Card extends React.Component {
  render() {
    // const { cardInfo } = this.props;
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="card-back">
        <div className="card-container">

          <div className="name-card">
            <p data-testid="name-card">{ cardName }</p>
          </div>

          <div className="image-card">
            <img src={ cardImage } alt={ cardName } data-testid="image-card" />
            { cardTrunfo && (
              <p data-testid="trunfo-card" className="trunfo-card">Super Trunfo</p>)}
          </div>

          <div className="description-card">
            <p data-testid="description-card">{ cardDescription }</p>
          </div>

          <div className="attr-card-container">
            <div className="attr-p">
              <p>Attr01....................................</p>
              <span data-testid="attr1-card">{cardAttr1}</span>
            </div>
            <div className="attr-p">
              <p>Attr02....................................</p>
              <span data-testid="attr2-card">{cardAttr2}</span>
            </div>
            <div className="attr-p">
              <p>Attr03....................................</p>
              <span data-testid="attr3-card">{cardAttr3}</span>
            </div>
            <p data-testid="rare-card">{cardRare}</p>
          </div>

        </div>

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
