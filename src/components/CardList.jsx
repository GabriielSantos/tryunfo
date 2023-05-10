import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { savedCards, deleteCard } = this.props;
    return (
      <div className="cardList-container">
        {
          savedCards.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                onClick={ () => deleteCard(card.cardName) }
              >
                Excluir

              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  savedCards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardList;
