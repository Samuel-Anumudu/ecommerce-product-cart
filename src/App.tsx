import Navigation from "./layouts/Navigation";
import Main from "./layouts/Main";
import { ProductContextProvider } from "./context/ProductContext";

const App: React.FC = () => {
  return (
    <ProductContextProvider>
      <Navigation />
      <Main />
    </ProductContextProvider>
  );
};

export default App;
