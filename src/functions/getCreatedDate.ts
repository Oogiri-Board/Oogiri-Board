const getCreatedDate = (time: Date): string => {
  const month = time.getMonth() + 1,
        date = time.getDate(),
        hour = time.getHours(),
        minute = time.getMinutes(),

        MM = ("00" + month).slice(-2),
        DD = ("00" + date).slice(-2),
        hh = ("00" + hour).slice(-2),
        mm = ("00" + minute).slice(-2);

  return `${MM}/${DD} ${hh}:${mm}`;
}

export default getCreatedDate;