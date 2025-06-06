export function capitalizarTexto(texto: string) {
  if (!texto) return texto;

  return texto
    .toLowerCase()
    .split(' ')
    .map(palabra => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })
    .join(' ');
}

export const generateRandomId = (): number => {
  return (Math.floor(Math.random() * 980) + 21);
};
