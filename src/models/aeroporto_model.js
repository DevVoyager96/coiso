let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.nome != undefined &&
    body.endereco != undefined &&
    body.nome != "" &&
    body.endereco > 0 
  ) {
    return {
      id,
      dataAluguel: body.dataAluguel,
      dataDevolucao: body.dataDevolucao,
      livro_id: body.livro_id,
      estudante_id: body.estudante_id,
    };
  }
};

module.exports = model;