let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.porcentagem_suco != undefined &&
    body.kcal200ml != undefined &&
    body.sabor != undefined &&
    body.tamanhoMl != undefined &&
    body.sabor != "" &&
    body.kcal200ml > 0 &&
    body.tamanhoMl > 0 &&
    body.porcentagem_suco > 0 
  ) {
    return {
      id,
      porcentagem_suco: body.porcentagem_suco,
      kcal200ml: body.kcal200ml,
      sabor: body.sabor,
      tamanhoMl: body.tamanhoMl
    };
  }
};

module.exports = model;