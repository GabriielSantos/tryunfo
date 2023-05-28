import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';
import Card from '../Card';
import Filter from '../Filter';
import './style.css';

export default class EditCards extends Component {
  handleAttrClick = (card) => {
    if (card.cardName === 'Fallen Angel') {
      playClickSound();
      const timeout = 600;
      setTimeout(this.openVideo, timeout);
    }
  };

  render() {
    const {
      filterOnChange, filterFields, removeCard,
      createCard, filteredCards, startGame,
    } = this.props;
    return (
      <section className="section__edit-cards">

        <Button text="Voltar" extraclass="back__button" onClick={ startGame } />
        <Filter
          filterOnChange={ filterOnChange }
          superTrunfo={ filterFields.superTrunfo }
          onAddCardClick={ createCard }
        />
        <section className="section__cards">
          {
            filteredCards.map((card) => (
              <div key={ card.cardName }>
                <Card
                  { ...card }
                  onAttrClick={ () => this.handleAttrClick(card) }
                  isPreview={ false }
                  onRemoveClick={ () => removeCard(card.cardName) }
                />
              </div>))
          }
        </section>
      </section>
    );
  }
}

EditCards.propTypes = {
  filterFields: PropTypes.shape({
    superTrunfo: PropTypes.bool,
  }).isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape).isRequired,
  filterOnChange: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  createCard: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};
