import database from '../../database';

const deleteProductService = async id => {
  try {
    const response = await database.query(
      'DELETE FROM products WHERE id = $1',
      [id]
    );

    if (response.rowCount === 0) throw 'Product not found';

    return 'Product deleted';
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteProductService;
