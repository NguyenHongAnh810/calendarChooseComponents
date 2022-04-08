export const getDayInDate = (day, month, year) =>{
    return new Date(year, month - 1, day).getDay()
  }
  
export const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  }