/**
 * Every router handle and rediract show page done by this page
 * pages show respectively paths
 * Navebar and footer show always
 * if there is unhappy path redirect to not found page
 *
 */

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./containers/Navbar/Navbar";
import "./App.css";
import Home from "./containers/Home/Home";
import Footer from "./containers/Footer/Footer";
import Notfound from "./containers/notfound/notfound";
import CategoryBook from "./containers/Books/CategoryBook";
import ShowCategoryListbooks from "./containers/ShowCategoryListbooks/ShowCategoryListbooks";
import TopBook from "./containers/Books/TopBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/listname/:listname"
            component={ShowCategoryListbooks}
          />
          <Route exact path="/categorybooks/:cid" component={CategoryBook} />
          <Route exact path="/books/:bookid" component={TopBook} />
          <Route exact path="*" component={Notfound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
