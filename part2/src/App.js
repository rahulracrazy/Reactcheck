import { Route, Routes } from "react-router-dom";
import Allmeetups from "./pages/Allmeetups";
//import Favorites from "./pages/Favorites";
import Newmeetuppage from "./pages/Newmeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/layout";

require('newrelic')



function App() {
  return (
    <Layout>
    <div>
      <Routes>
      <Route path='/' element={<Allmeetups/>}/>
      <Route path='/newmeet' element={<Newmeetuppage/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
    </Layout>
  );
}

export default App;
