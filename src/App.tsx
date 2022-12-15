import { useState } from "react";
import Navigation from "./layouts/Navigation";
import Main from "./layouts/Main";
import { ProductContextProvider } from "./context/ProductContext";

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <ProductContextProvider>
      {showMenu && <div className="overlay"></div>}
      <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
      <Main />
    </ProductContextProvider>
  );
};

export default App;
