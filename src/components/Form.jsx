import PropTypes from 'prop-types';
import React from 'react';
import '../css/Form.css';

class Form extends React.Component {
  render() {
    const { onInputChange, onSaveButtonClick } = this.props;

    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.props;

    return (
      <form className="form-container">

        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="cardName"
          id="name"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />

        <div className="input-container">
          <label htmlFor="description">Descrição</label>
          <input
            type="textarea"
            name="cardDescription"
            id="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </div>

        <label htmlFor="attr1">Attr 01</label>
        <input
          className="cardAttr"
          type="number"
          name="cardAttr1"
          id="attr1"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <label htmlFor="attr2">Attr 02</label>
        <input
          className="cardAttr"
          type="number"
          name="cardAttr2"
          id="attr2"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <label htmlFor="attr3">Attr 03</label>
        <input
          className="cardAttr"
          type="number"
          name="cardAttr3"
          id="attr3"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <label htmlFor="image">Imagem</label>
        <input
          type="text"
          name="cardImage"
          id="image"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <div className="input-container">
          <select
            name="cardRare"
            id="raridade"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>

        <div className="submit-container">
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label>
                Super Trybe Trunfo
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  value={ cardTrunfo }
                  name="cardTrunfo"
                />
              </label>)}

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>

      </form>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
