// helper function for choosing a random element from an array
export const randomChoice = <T>(array: T[]) : T => {
  return array[Math.floor(Math.random() * array.length)];
}