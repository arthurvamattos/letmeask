import { ThemeProvider } from "styled-components";

import { Routes } from "./routes";
import GlobalStyle from "./styles/global";

import { AuthContextProvider } from "./contexts/AuthContext";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
