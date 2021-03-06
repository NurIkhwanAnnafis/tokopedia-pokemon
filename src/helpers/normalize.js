export const normalizeGetId = (record) => {
  if (!record || !typeof record === 'object') return null;

  const { url } = record;
  if (!url || !typeof url === 'string') return null;

  const data = url.split('/');

  if (!data[6] || isNaN(Number(data[6]))) return null;

  return Number(data[6]);
}

export const normalizeTypes = (listType) => {
  if(!listType || listType.length === 0) return 'Unknown';
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