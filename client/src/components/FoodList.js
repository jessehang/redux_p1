import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedFood } from '../actions';

class FoodList extends Component {
  render() {
    return (
      <div>
        {this.props.food.map(item => (
          <div key={item.food}>
            Item: {item.food}, Calories: {item.calories}
            <button onClick={() => this.props.selectedFood(item)}>
              Select
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { food: state.food };
};

export default connect(
  mapStateToProps,
  { selectedFood }
)(FoodList);
