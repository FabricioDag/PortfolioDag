// Funções de operações aritméticas
export const add = (a, b) => parseFloat(a) + parseFloat(b);
export const subtract = (a, b) => parseFloat(a) - parseFloat(b);
export const multiply = (a, b) => parseFloat(a) * parseFloat(b);
export const divide = (a, b) => {
  if (b === '0') return 'Erro'; // Evitar divisão por zero
  return parseFloat(a) / parseFloat(b);
};
