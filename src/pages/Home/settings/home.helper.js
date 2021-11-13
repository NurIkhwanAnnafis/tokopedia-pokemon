export const constructData = (listData, listMyPokemon) => {
  const result = listData.map(x => ({
    ...x,
    owned: listMyPokemon.filter(y => y.name === x.name).length
  }));

  return result;
}