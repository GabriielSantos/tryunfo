const validateNumber = (cardAttr1, cardAttr2, cardAttr3) => {
  const sumValue = 210;
  const maxValue = 90;

  // Validação da Soma menor do que 210
  const sumInputs = (Number(cardAttr1)
  + Number(cardAttr2)
  + Number(cardAttr3)
  <= sumValue);

  // Validação dos inputs menores que 90
  const maxInputs = (Number(cardAttr1) <= maxValue
  && Number(cardAttr2) <= maxValue
  && Number(cardAttr3) <= maxValue);

  // Validação dos inputs maiores que 0
  const minInputs = (Number(cardAttr1) >= 0
  && Number(cardAttr2) >= 0
  && Number(cardAttr3) >= 0);

  // Exportar validação
  const validateFormNumber = sumInputs && maxInputs && minInputs;
  return validateFormNumber;
};

export default validateNumber;
