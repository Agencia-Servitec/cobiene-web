import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GlobalStyles } from "./styles/theme/GlobalStyle";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  );
};
