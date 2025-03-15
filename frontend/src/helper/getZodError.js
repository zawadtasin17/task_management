export const getZodError = (errors) => {
  const newError = {};
  errors.forEach((error) => {
    newError[error.path[0]] = error.message;
  });
  return errorObj;
}