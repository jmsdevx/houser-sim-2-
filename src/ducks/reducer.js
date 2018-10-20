const axios = require("axios");

const GET_HOUSES = "GET_HOUSES";

export function getHouses() {
  return {
    type: GET_HOUSES,
    payload: axios
      .get("http://localhost:3005/api/houses")
      .then(response => response.data)
  };
}
const initialState = {
  houses: []
};

export default function houseReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_HOUSES}_FULFILLED`:
      return {
        ...state,
        houses: action.payload
      };

    default:
      return state;
  }
}
