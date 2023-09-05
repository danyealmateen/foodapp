import { styled } from 'styled-components';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Meal>
      <div>
        <h3>{props.name}</h3>
        <Description>{props.description}</Description>
        <Price>{price}</Price>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </Meal>
  );
};

export default MealItem;

const Meal = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }
`;

const Description = styled.div`
  font-style: italic;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;
