import database from '../../database';

const listProductService = async id => {
  try {
    const response = await database.query(
      'SELECT * FROM products WHERE id = $1',
      [id]
    );

    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductService;
