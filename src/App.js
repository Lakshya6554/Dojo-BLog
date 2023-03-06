import "./App.css";
import Navbar from "./navbar";
import Homepage from "./home";
import Create from "./create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./blogDetails";
import notFound from "./notfound";

//this app function goes to index.js and displays there
function App() {
  return (
    //all of route is going in switch component
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/contact">
              <Create />
            </Route>
            <Route path="/about">
              <Create />
            </Route>
            <Route path="*">
              <notFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
//we export the app function above
