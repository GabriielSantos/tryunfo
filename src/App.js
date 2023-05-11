import React from 'react';
import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';
import FilterCard from './components/FilterCard';
import Form from './components/Form';
import logo from './logo_tryunfo.png';
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
    filters: {
      filter: '',
      filterCards: [],
      superTrunfoCheck: false,
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
      this.setState((prev) => ((this.trunfoVerify()) ? {
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

  deleteCard = (target) => {
    const { cardDeck: { savedCards } } = this.state;

    const filterCard = savedCards.filter((card) => (card.cardName !== target));
    console.log(filterCard);

    this.setState((prev) => ({
      cardDeck: {
        ...prev.cardDeck,
        savedCards: filterCard,
      },
      cardInfo: {
        ...prev.cardInfo,
        hasTrunfo: false,
      },
    }));
  };

  filterName = ({ target }) => {
    this.setState((prev) => ({
      filters: {
        ...prev.filters,
        filter: target.value,
      },
    }), () => {
      const { cardDeck: { savedCards }, filters: { filter } } = this.state;
      const filteredCard = savedCards.filter((card) => card.cardName.includes(filter));
      this.setState((prev) => ({
        filters: {
          ...prev.filters,
          filterCards: filteredCard,
        },
      }));
    });
  };

  filterType = ({ target }) => {
    const { cardDeck: { savedCards }, filters: { filter } } = this.state;

    const typeFilter = savedCards.filter((card) => card.cardRare === target.value);
    const typeAndName = typeFilter.filter((card) => card.cardName.includes(filter));

    this.setState((prev) => (target.value === 'todas' ? ({
      filters: {
        ...prev.filters,
        filterCards: savedCards,
      },
    }) : ({
      filters: {
        ...prev.filters,
        filterCards: filter.length > 0 ? typeAndName : typeFilter,
      },
    })
    ));
  };

  filterTrunfo = ({ target }) => {
    const { cardDeck: { savedCards } } = this.state;
    const findTrunfo = savedCards.find((card) => card.cardTrunfo === true);

    this.setState((prev) => ({
      filters: {
        ...prev.filters,
        filterCards: target.checked ? [findTrunfo] : savedCards,
        superTrunfoCheck: !prev.superTrunfoCheck,
      },
    }));
  };

  render() {
    const { cardInfo, filters: { filterCards, superTrunfoCheck } } = this.state;

    return (
      <div>
        <header>
          <img src={ logo } alt="Logo Trybe" />
        </header>
        <div className="cadastrateCard">
          <div className="form">
            <h2>Adicione sua Carta</h2>
            <Form
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
          </div>
          <div className="card">
            <h2>Pré-visualização</h2>
            <Card
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
        </div>

        <h2 className="title-cardList">Todas as Cartas</h2>

        <div className="filters">
          <FilterCard
            filterName={ this.filterName }
            filterType={ this.filterType }
            filterTrunfo={ this.filterTrunfo }
            superTrunfoCheck={ superTrunfoCheck }
          />
        </div>
        <div className="deckCards">
          <CardList
            filterCards={ filterCards }
            deleteCard={ this.deleteCard }
          />
        </div>
      </div>
    );
  }
}

export default App;
