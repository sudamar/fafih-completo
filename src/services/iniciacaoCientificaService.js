import iniciacaoContent from '@/data/iniciacao-cientifica.json' with { type: 'json' };

export const getIniciacaoCientificaContent = () => ({ ...iniciacaoContent });

export default {
  getIniciacaoCientificaContent,
};
