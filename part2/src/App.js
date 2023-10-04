import { Route, Routes } from "react-router-dom";

import Allmeetups from "./pages/Allmeetups";
//import Favorites from "./pages/Favorites";
import Newmeetuppage from "./pages/Newmeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from './components/layout/MainNav'

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
      <Route path='/' element={<Allmeetups/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/newmeet' element={<Newmeetuppage/>}/>
      </Routes>
    </div>
  );
}

export default App;
