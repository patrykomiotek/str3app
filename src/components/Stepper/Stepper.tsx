import { useReducer } from "react";
import { Button } from "../../ui";

enum ActionType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

type State = {
  count: number;
};

type Action = {
  type: ActionType;
};

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};
// action creators
const increment = () => ({ type: ActionType.INCREMENT });
const decrement = () => ({ type: ActionType.DECREMENT });

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Button label="-" onClick={() => dispatch(decrement())} />
      <span className="mx-4">{state.count}</span>
      <Button label="+" onClick={() => dispatch(increment())} />
    </div>
  );
};
