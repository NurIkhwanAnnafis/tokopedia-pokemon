export const checkPokemonIsTaken = (list, nickname) => {
  const isTaken = list.some(val => val.nickname.toLowerCase() === nickname.toLowerCase());

  return isTaken;
}