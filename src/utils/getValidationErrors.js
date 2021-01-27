export default function getValidationErros(err) {
  const validationErros = {};

  if (err) {
    err.inner.forEach((error) => {
      validationErros[String(error.path)] = error.message;
    });
  }

  return validationErros;
}
