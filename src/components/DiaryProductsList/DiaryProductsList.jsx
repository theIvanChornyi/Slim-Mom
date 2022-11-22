import DiaryProductsItem from 'components/DiaryProductsItem';
import PropTypes from 'prop-types';
import { ListProducts, Text } from './DiaryProductsList.styled';

export default function DiaryProductsList({ products, handleDeleteProduct }) {
  return (
    <>
      {products?.length > 0 ? (
        <ListProducts>
          {products.map(product => (
            <DiaryProductsItem
              handleDeleteProduct={handleDeleteProduct}
              key={product.id}
              id={product.id}
              name={product.title}
              weight={product.weight}
              kcal={product.kcal}
            />
          ))}
        </ListProducts>
      ) : (
        <Text>Please, add product!</Text>
      )}
    </>
  );
}

DiaryProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      kcal: PropTypes.number,
      title: PropTypes.string,
      weight: PropTypes.number,
    })
  ),
  handleDeleteProduct: PropTypes.func,
};
