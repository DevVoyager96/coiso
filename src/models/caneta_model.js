let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.cor != undefined &&
    body.ehBic != false &&
    body.cor != ""
  ) {
    return {
      id,
      cor: body.cor,
      ehBic: body.ehBic
    };
  }
};

module.exports = model;