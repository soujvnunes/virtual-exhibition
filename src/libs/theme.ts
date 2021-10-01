export default {
  color: {
    main: "#39f",
    accent: "#fcf",
    error: "#f33",
    warning: "#fc0",
    success: "#090",
    default: {
      100: "#fff",
      200: "#f5f5f5",
      700: "#666",
      800: "#333",
      900: "#0e0e0e",
    },
  },
  font: {
    family: "futura-pt, sans-serif",
    size: <{ [key: string]: number }>{
      h1: 2.5,
      h2: 2.25,
      h3: 2,
      p: 1,
      span: 0.75,
    },
  },
  size: {
    breakpoints: {
      xs: 0,
      sm: "30rem",
      md: "60rem",
      lg: "90rem",
      xl: "120rem",
    },
    factor: <{ [key: string]: number }>{
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
    },
    ratio: 0.25,
  },
};
