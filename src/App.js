import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
      
    </div>
  );
}

export default App;
