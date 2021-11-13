export const checkPokemonIsTaken = (list, nickname, name) => {
  const isTaken = list.some(val => val.nickname.toLowerCase() === nickname.toLowerCase() && val.name.toLowerCase() === name.toLowerCase());

  return isTaken;
}

export const normalizeTypes = (listType) => {
  if(listType.length === 0) return 'Unknown';
  if(listType.length === 1) return listType[0].type.name;

  const result = listType.reduce((temp, val, index) => {
    if (index === 0) {
      temp = val.type.name;
    } else if (listType.length - 1 === index) {
      temp = temp.concat(' and ', val.type.name);
    } else {
      temp = temp.concat(', ', val.type.name);
    }

    return temp;
  }, '');

  return result;
}