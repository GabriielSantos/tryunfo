const validateLength = (cardName, cardDescription, cardImage) => (
  cardName.length > 0 && cardDescription.length > 0 && cardImage.length > 0
);

export default validateLength;
