import membrosAnalistasData from '@/data/membros-analistas.json';

export const getMembrosAnalistas = () => {
  return membrosAnalistasData;
};

export const getMembrosAnalistasByTipo = (tipo) => {
  if (!tipo || tipo === 'todos') {
    return membrosAnalistasData;
  }

  return membrosAnalistasData.filter(
    (membro) => membro.tipo.toLowerCase() === tipo.toLowerCase()
  );
};

export const getTiposAnalistas = () => {
  const tipos = [...new Set(membrosAnalistasData.map((membro) => membro.tipo))];
  return tipos.sort();
};
