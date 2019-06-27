import React from 'react';
import { connect } from 'react-redux';

const FoodDetail = ({ selectedFood }) => {
  if (!selectedFood) {
    return 'Please select an item';
  }

  return (
    <div>
      <div>{selectedFood.food}</div>
      <br />
      <div>{selectedFood.calories}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedFood: state.selectedFood
  };
};

export default connect(mapStateToProps)(FoodDetail);
