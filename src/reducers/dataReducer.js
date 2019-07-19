import { mainListItems } from "../components/utils/listItems";

const initialState = {
  url: mainListItems.map(item => item.name)[0].toLowerCase()
};

export const data = (state = initialState, actions) => {
  switch (actions.type) {
    case "url":
      return {
        ...state,
        url: actions.payload
      };
    default:
      return state;
  }
};
