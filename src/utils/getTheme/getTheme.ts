import { GetTheme } from "spec";

const getTheme: GetTheme = (token) => (props) =>
  Object.assign({}, ...Object.values(props.theme))[token];

export default getTheme;
