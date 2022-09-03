import "./App.css";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import RouterComponent from "./components/Router";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <RouterComponent />
    </ThemeProvider>
  );
}

export default App;
