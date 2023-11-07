export const addZero = (value: number) => {
  if (value < 10) {
    return `0${value}`
  }
  return `${value}`
}

export const formatDate = (date: Date) => {
  return `${addZero(date.getDate())}-${addZero(date.getMonth() + 1)}-${date.getFullYear()}`
}
