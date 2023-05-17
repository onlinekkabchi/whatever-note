export const params = () => {
  const searchParams = new URL(window.location.href).searchParams;
  const parameterValue = searchParams.get("code");
  return parameterValue;
};
