export const checkPokemonIsTaken = (list, nickname, name) => {
  if (!list || !Array.isArray(list)) return false;
  if (!nickname) return true;
  if (!name) return false;

  const isTaken = list.some(val => val.nickname.toLowerCase() === nickname.toLowerCase() && val.name.toLowerCase() === name.toLowerCase());

  return isTaken;
}