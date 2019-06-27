import { combineReducers } from 'redux';

const foodReducer = () => {
  return [
    { food: 'burger', calories: 100 },
    { food: 'taco', calories: 250 },
    { food: 'burrito', calories: 1000 }
  ];
};

const selectedFoodReducer = (selectedFood = null, action) => {
  if (action.type === 'FOOD_SELECTED') {
    return action.payload;
  }

  return selectedFood;
};

export default combineReducers({
  food: foodReducer,
  selectedFood: selectedFoodReducer
});
