import { useState } from "react";
import Navigation from "./layouts/Navigation";
import Main from "./layouts/Main";

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      {showMenu && <div className="overlay"></div>}
      <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
      <Main />
    </>
  );
};

export default App;
