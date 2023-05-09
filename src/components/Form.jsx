import React from 'react';
import '../css/Form.css';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <h2>Adicione Nova Carta</h2>

        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          data-testid="name-input"
        />

        <label htmlFor="description">Descrição</label>
        <input
          type="textarea"
          name="description"
          id="description"
          data-testid="description-input"
        />

        <label htmlFor="attr1">Attr 01</label>
        <input
          type="number"
          name="attr1"
          id="attr1"
          data-testid="attr1-input"
        />

        <label htmlFor="attr2">Attr 02</label>
        <input
          type="number"
          name="attr2"
          id="attr2"
          data-testid="attr2-input"
        />

        <label htmlFor="attr3">Attr 03</label>
        <input
          type="number"
          name="attr3"
          id="attr3"
          data-testid="attr3-input"
        />

        <label htmlFor="image">Imagem</label>
        <input
          type="text"
          name="image"
          id="image"
          data-testid="image-input"
        />

        <select
          name="raridade"
          id="raridade"
          data-testid="rare-input"
        >
          Raridade
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        <label htmlFor="check-trunfo">Super Trunfo</label>
        <input
          type="checkbox"
          name="check-trunfo"
          id="check-trunfo"
          data-testid="trunfo-input"
        />

        <button type="submit" data-testid="save-button">Salvar</button>
      </form>

    );
  }
}

export default Form;
