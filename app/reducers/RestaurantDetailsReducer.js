import { merge } from 'lodash';
import { RECEIVE_RESTAURANT_DETAILS,
         RECEIVE_RESTAURANT_MAP
       } from '../actions/RestaurantDetailsActions';

const defaultRestaurantDetails = Object.freeze({
    address: "",
    phone: "",
    hours: ""
});

const RestaurantDetailsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESTAURANT_DETAILS:
      return action.restaurantDetails;
    case RECEIVE_RESTAURANT_MAP:
      return action.map;
    default:
      return state;
  }
};

export default RestaurantDetailsReducer;
