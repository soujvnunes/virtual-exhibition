import {
  createContext,
  ProviderProps,
  useContext,
  useMemo,
  useReducer,
} from "react";

const types = {
  toggle: "toggle",
  set: "set",
} as const;
const is = {
  light: "light",
  dark: "dark",
} as const;
const initialState = {
  is: is.light,
  dispatch: () => {},
};

export type Is = typeof is[keyof typeof is];
type Action =
  | {
      type: typeof types.toggle;
    }
  | {
      type: typeof types.set;
      props: Is;
    };
type State = {
  is: Is;
  dispatch(_action: Action): void;
};

const Context = createContext<State>(initialState);

function reducer(state: Is, action: Action): Is {
  switch (action.type) {
    case types.toggle:
      return state === initialState.is ? is.dark : is.light;
    case types.set:
      return action.props;
    default:
      throw new Error("Action not found.");
  }
}
function Provider(props: Omit<ProviderProps<State>, "value">) {
  const [state, dispatch] = useReducer(reducer, is.light);
  const value: State = useMemo(
    () => ({
      is: state,
      dispatch,
    }),
    [state],
  );

  return <Context.Provider value={value} {...props} />;
}
function useMode(): State {
  return useContext(Context);
}

Context.displayName = "Modes";
export default Object.assign(useMode, { Provider, types });
