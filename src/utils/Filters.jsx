// filterNameCards = ({ target }) => {
//   this.setState((prev) => ({
//     filters: {
//       ...prev.filters,
//       filter: target.value,
//     },
//   }), () => {
//     const { cardDeck: { savedCards }, filters: { filter } } = this.state;
//     const filteredCard = savedCards.filter((card) => card.cardName.includes(filter));
//     this.setState((prev) => ({
//       filters: {
//         ...prev.filters,
//         filter: filteredCard,
//       },
//     }));
//   });
// };

// filterType = ({ target }) => {
//   const { cardDeck: { savedCards }, filters: { filter } } = this.state;

//   const typeFilter = savedCards.filter((card) => card.cardRare === target.value);
//   const typeAndName = typeFilter.filter((card) => card.cardName.includes(filter));

//   this.setState((prev) => (target.value === 'todas' ? ({
//     filters: {
//       ...prev.filters,
//       filterCards: savedCards,
//     },
//   }) : ({
//     filters: {
//       ...prev.filters,
//       filterCards: filter.length > 0 ? typeAndName : typeFilter,
//     },
//   })
//   ));
// };

// filterTrunfo = ({ target }) => {
//   const { cardDeck: { savedCards } } = this.state;
//   const findTrunfo = savedCards.find((card) => card.cardTrunfo === true);

//   this.setState((prev) => ({
//     filters: {
//       ...prev.filters,
//       filterCards: target.checked ? [findTrunfo] : savedCards,
//       superTrunfoCheck: !prev.superTrunfoCheck,
//     },
//   }));
// };

// ------------- EM UMA FUNÇÃO SÓ ---------------

// onFilterChange = ({ target }) => {
//   const { name } = target;
//   const { cardDeck: { savedCards } } = this.state;

//   const value = target.type === 'checkbox' ? target.checked : target.value;

//   this.setState({
//     filters: {
//       [name]: value,
//     },
//   });

//   savedCards.forEach((cards) => {
//     if ([name] === cards.cardName) {
//       const filterName = savedCards.filter((card) => card.cardName.includes(value));
//       this.setState({
//         filters: {
//           filterCards: [filterName],
//         },
//       });
//     } else if ([name] === cards.cardRare) {
//       const typeFilter = savedCards.filter((card) => card.cardRare === target.value);
//       this.setState({
//         filters: {
//           filterCards: [typeFilter],
//         },
//       });
//     } else if ([name] === cards.cardTrunfo) {
//       const findTrunfo = savedCards.find((card) => card.cardTrunfo === true);
//       this.setState({
//         filters: {
//           filterCards: [findTrunfo],
//         },
//       });
//     }
//   });
// };
