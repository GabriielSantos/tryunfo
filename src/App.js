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
  };

  validateForm = () => {
    const { cardInfo: { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } } = this.state;

    const resultValidate = validateLength(cardName, cardDescription, cardImage)
    && validateNumber(cardAttr1, cardAttr2, cardAttr3);
    console.log(resultValidate);
    return resultValidate;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

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

  // onSaveButtonClick = () => {

  // };

  render() {
    const { cardInfo } = this.state;

    return (
      <div className="grid">
        <Form
          cardInfo={ cardInfo }
          onInputChange={ this.onInputChange }
          validateForm={ this.validateForm }
          className="left wrapper"
          // onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardInfo={ cardInfo }
          className="right wrapper"
        />
      </div>
    );
  }
}

export default App;
