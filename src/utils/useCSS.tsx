import React, {
  createContext,
  useContext,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

type Style<Ks extends keyof React.CSSProperties = keyof React.CSSProperties> = {
  [K in Ks]?: React.CSSProperties[K];
};

const CSSThemeContext = createContext({
  color: {
    main: "",
  },
});
const CSSContext = createContext<
  Partial<{
    styles?: React.CSSProperties;
    setStyles(
      newStyles: React.CSSProperties,
    ): React.Dispatch<React.SetStateAction<React.CSSProperties>>;
  }>
>({});

type T = {
  color: {
    main: string;
  };
};

function injectRules(rules: string) {
  const style = document.createElement("style");

  style.innerHTML += rules;
}
function CSSProvider({ children }: React.PropsWithChildren<{}>) {
  const [styles, setStyles] = useState({});
  const CSS = useMemo(
    () => ({
      styles,
      setStyles(newStyles: React.CSSProperties) {
        setStyles((prevStyles) => ({ ...prevStyles, ...newStyles }));
      },
    }),
    [styles],
  );

  return <CSSContext.Provider value={CSS}>{children}</CSSContext.Provider>;
}
function useCSS(style: (theme: T) => React.CSSProperties) {
  const CSSTheme = useContext(CSSThemeContext);
  const CSS = useContext(CSSContext);
  const [newCSS, setCSS] = useState(() => CSS);

  useInsertionEffect(() => {
    injectRules(CSS.styles);
  }, []);
  useLayoutEffect(() => {
    style(CSSTheme);
  }, [CSSTheme, style]);
}
