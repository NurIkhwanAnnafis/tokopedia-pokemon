export const normalizeGetId = ({ url }) => {
  const data = url.split('/');

  return data[6];
}