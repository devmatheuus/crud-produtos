import database from '../../database';

const updateProductService = async (name, price, category_id, id) => {
  try {
    const findId = await database.query(
      'SELECT * FROM products WHERE id = $1',
      [id]
    );

    if (findId.rowCount === 0) throw 'Product not found';

    const response = await database.query(
      `UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4
       RETURNING *
      `,
      [
        name || findId.rows[0].name,
        price || findId.rows[0].price,
        category_id || findId.rows[0].category_id,
        id
      ]
    );

    return { message: 'Product updated', product: response.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
