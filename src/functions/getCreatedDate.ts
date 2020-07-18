const getCreatedDate = (time: Date): string => {
  const MM = time.getMonth() + 1,
        DD = time.getDate(),
        hh = time.getHours(),
        mm = time.getMinutes();

  return `${MM}/${DD} ${hh}:${mm}`;
}

export default getCreatedDate;