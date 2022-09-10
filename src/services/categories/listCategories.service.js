import database from '../../database';

const listCategoriesService = async () => {
  try {
    const response = await database.query('SELECT * from categories');

    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listCategoriesService;
