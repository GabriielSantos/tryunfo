import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import validateLength from './utils/ValidateLength';
import validateNumber from './utils/ValidateNumber';

class App extends React.Component {
  state = {
    cardInfo: {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    },
    cardDeck: {
      savedCards: [],
    },
  };

  validateForm = () => {
    const { cardInfo: { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } } = this.state;

    const resultValidate = validateLength(cardName, cardDescription, cardImage)
    && validateNumber(cardAttr1, cardAttr2, cardAttr3);
    return resultValidate;
  };

  trunfoVerify = () => {
    const { cardDeck: { savedCards } } = this.state;
    return savedCards.some((card) => card.cardTrunfo === true);
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const { cardTrunfo } = this.state;

    const value = target.type === 'checkbox' ? !cardTrunfo : target.value;

    this.setState(
      (prev) => ({
        cardInfo: {
          ...prev.cardInfo,
          [name]: value,
        },
      }),
      () => {
        const isSaveButtonDisabled = !this.validateForm();
        this.setState((prev) => ({
          cardInfo: {
            ...prev.cardInfo,
            isSaveButtonDisabled,
          },
        }));
      },
    );
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardInfo } = this.state;
    const saveCard = {};

    Object.keys(cardInfo).forEach((key) => {
      saveCard[key] = cardInfo[key];
    });

    this.setState((prev) => ({
      cardDeck: {
        savedCards: [...prev.cardDeck.savedCards, saveCard],
      },
    }), () => {
      this.setState((prev) => ((this.trunfoVerify())
        ? {
          cardInfo: {
            ...prev.cardInfo,
            cardName: '',
            cardDescription: '',
            cardAttr1: '0',
            cardAttr2: '0',
            cardAttr3: '0',
            cardImage: '',
            cardRare: 'Normal',
            cardTrunfo: false,
            hasTrunfo: true,
          },
        } : ({
          cardInfo: {
            ...prev.cardInfo,
            cardName: '',
            cardDescription: '',
            cardAttr1: '0',
            cardAttr2: '0',
            cardAttr3: '0',
            cardImage: '',
            cardRare: 'Normal',
            cardTrunfo: false,
          },
        })));
    });
  };

  render() {
    const { cardInfo } = this.state;

    return (
      <div className="grid">
        <Form
          className="left wrapper"
          cardName={ cardInfo.cardName }
          cardDescription={ cardInfo.cardDescription }
          cardAttr1={ cardInfo.cardAttr1 }
          cardAttr2={ cardInfo.cardAttr2 }
          cardAttr3={ cardInfo.cardAttr3 }
          cardImage={ cardInfo.cardImage }
          cardRare={ cardInfo.cardRare }
          cardTrunfo={ cardInfo.cardTrunfo }
          hasTrunfo={ cardInfo.hasTrunfo }
          isSaveButtonDisabled={ cardInfo.isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          validateForm={ this.validateForm }
          onSaveButtonClick={ this.onSaveButtonClick }
          trunfoVerify={ this.trunfoVerify }
        />
        <Card
          className="right wrapper"
          cardName={ cardInfo.cardName }
          cardDescription={ cardInfo.cardDescription }
          cardAttr1={ cardInfo.cardAttr1 }
          cardAttr2={ cardInfo.cardAttr2 }
          cardAttr3={ cardInfo.cardAttr3 }
          cardImage={ cardInfo.cardImage }
          cardRare={ cardInfo.cardRare }
          cardTrunfo={ cardInfo.cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
