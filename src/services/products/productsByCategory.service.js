import database from '../../database';

const productsByCategoryService = async category_id => {
  try {
    const response = await database.query(
      `
      SELECT 
        p.name, p.price, c.name category
      FROM 
        products p
      JOIN
       categories c
      ON 
        c.id = p.category_id
      WHERE
        c.id = $1
      `,
      [category_id]
    );
    if (response.rowCount === 0) throw 'Product not found';

    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default productsByCategoryService;
