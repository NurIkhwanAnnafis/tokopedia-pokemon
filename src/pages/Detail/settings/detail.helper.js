export const checkPokemonIsTaken = (list, nickname, name) => {
  const isTaken = list.some(val => val.nickname.toLowerCase() === nickname.toLowerCase() && val.name.toLowerCase() === name.toLowerCase());

  return isTaken;
}