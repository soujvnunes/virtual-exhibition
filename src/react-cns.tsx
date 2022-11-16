import { createContext, useContext, useInsertionEffect, useState } from "react";

interface Theme {}

type S<P> = React.CSSProperties | ((props: P & Theme) => React.CSSProperties);

const CnsContext = createContext({});
const useCns = () => useContext(CnsContext);

function CnsProvider(props: Omit<React.ProviderProps<{}>, "value">) {
  const [cns, setCns] = useState({});

  return (
    <CnsContext.Provider
      value={{
        cns,
        setCns,
      }}
      {...props}
    />
  );
}
const makeCns = (_cns) => (props) => {
  const { setCns } = useCns();
  const classes = "";
  const theme = {};
  const cns = typeof _cns === "function" ? _cns({ ...props, ...theme }) : _cns;

  useInsertionEffect(() => {
    setCns((prevCns) => ({
      ...prevCns,
      ...cns,
    }));
  }, [props, theme]);

  return classes;
};
