import formasContent from '@/data/formas-ingresso.json' with { type: 'json' };

export const getFormasIngressoContent = () => ({ ...formasContent });

export default {
  getFormasIngressoContent,
};
