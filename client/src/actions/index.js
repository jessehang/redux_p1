export const selectFood = food => {
  return {
    type: 'FOOD_SELECTED',
    action: food
  };
};
