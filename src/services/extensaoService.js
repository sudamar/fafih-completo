import extensaoContent from '@/data/extensao.json' with { type: 'json' };

export const getExtensaoContent = () => ({ ...extensaoContent });

export default {
  getExtensaoContent,
};
