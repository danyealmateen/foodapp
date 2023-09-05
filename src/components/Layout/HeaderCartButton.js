import styled, { keyframes } from 'styled-components';
import CartIcon from './CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button className={btnClasses} onClick={props.onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </Button>
  );
};

export default HeaderCartButton;

const Badge = styled.div`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;

    ${Badge} {
      background-color: #92320c;
    }
  }
`;

const Icon = styled.div`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const Bump = styled.div`
  animation: bump 300ms ease-out;
`;

const bump = keyframes`
0% {
    //       transform: scale(1);
    //     }
    //     10% {
    //       transform: scale(0.9);
    //     }
    //     30% {
    //       transform: scale(1.1);
    //     }
    //     50% {
    //       transform: scale(1.15);
    //     }
    //     100% {
    //       transform: scale(1);
    //     }
`;
