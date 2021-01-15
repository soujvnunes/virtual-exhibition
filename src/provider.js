import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./modules";
import { KEY_THEME_DARK, SECTION_BACKGROUND_CONTEXT } from "./constants";

const SectionBackgroundContext = SECTION_BACKGROUND_CONTEXT;

function Provider({ children }) {
  const [background, setBackground] = useState("");

  return (
    <ThemeProvider theme={theme({ type: KEY_THEME_DARK })}>
      <SectionBackgroundContext.Provider value={{ background, setBackground }}>
        {children}
      </SectionBackgroundContext.Provider>
    </ThemeProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
