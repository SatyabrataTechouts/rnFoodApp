import {View, Text} from 'react-native';
import {useState, useRef} from 'react';
import CartContext from './CartContext';

const CartState = props => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProductCount, setCartProductCount] = useState(0);
   
  const addToCart = item => {
    console.log('item', item)
    console.log('hii')
    const existingItem = data.find(food => food.id == item.id);
    console.log('existingItem', existingItem)
    if (existingItem) {
      
      setData(
        data.map(existingFood =>
          existingFood.id === item.id
            ? {...existingFood, quantity: existingFood.quantity + 1}
            : existingFood,
        ),
      );
    }
     else {
      setData([...data, {...item, quantity: 1}]);
    }
   
  };
   const increases=(item)=>{
    // const existingItem = data.find(food => food.id == item.id);
    // if(existingItem)
    console.log('item.id', item.id)
    setData(
      data.map(existingFood =>
        existingFood.id === item.id
          ? {...existingFood, quantity: existingFood.quantity + 1}
          : existingFood
      ),
    );
   }
   const decrease=(item)=>{
    // const existingItem = data.find(food => food.id == item.id);
    // if(existingItem)
    console.log('item.id', item.id)
    if(item.quantity<=1){
      setData(existingFood=>existingFood.id===item.id?{...existingFood,quantity:1}:existingFood)
    }
    else{
    setData(
      data.map(existingFood =>
        existingFood.id === item.id
          ? {...existingFood, quantity: existingFood.quantity - 1}
          : existingFood
      ),
    );
   }
  }
  const deleteItem=(item)=>{
     setData(data.filter((foodItem)=>foodItem.id!=item.id))
  }
  return (
    <CartContext.Provider
      value={{data, addToCart, cartProductCount, totalPrice,increases,deleteItem,decrease}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;