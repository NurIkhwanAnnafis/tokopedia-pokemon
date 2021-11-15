export const constructData = (listData = [], listMyPokemon = []) => {
  if (!listData || !Array.isArray(listData)) {
    return [];
  }

  const result = listData.map(x => ({
    ...x,
    key: x.name,
    owned: listMyPokemon.filter(y => y.name === x.name).length
  }));

  return result;
}