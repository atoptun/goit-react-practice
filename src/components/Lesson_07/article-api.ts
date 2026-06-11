import axios from 'axios';

const algoliaApi = axios.create({
  baseURL: 'https://hn.algolia.com/api/v1',
});

export const fetchArticlesWithTopic = async (query: string) => {
  const response = await algoliaApi.get(`/search?query=${query}`);
  return response.data;
};
