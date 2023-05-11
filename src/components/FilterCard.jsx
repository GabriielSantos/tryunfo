import PropTypes from 'prop-types';
import React from 'react';

class FilterCard extends React.Component {
  render() {
    const { superTrunfoCheck, filterName, filterType, filterTrunfo } = this.props;
    return (
      <div className="filter-container">

        <span>Filtros de Busca</span>

        <input
          type="text"
          data-testid="name-filter"
          placeholder="Nome da Carta"
          disabled={ superTrunfoCheck }
          onChange={ filterName }
        />

        <select
          data-testid="rare-filter"
          disabled={ superTrunfoCheck }
          onChange={ filterType }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        <div className="trunfo-filter">
          <label data-testid="trunfo-filter">
            Super Trunfo
            <input
              type="checkbox"
              onChange={ filterTrunfo }
            />
          </label>
        </div>

      </div>
    );
  }
}

FilterCard.propTypes = {
  filterName: PropTypes.func.isRequired,
  filterType: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.func.isRequired,
  superTrunfoCheck: PropTypes.bool.isRequired,
};
export default FilterCard;
