import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';



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
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services">
             <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path="/doctors">
             <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute  path="/servicedetail/:servicekey">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route  path="/signup">
              <Signup></Signup>
            </Route>
            <Route  path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        
      </AuthProvider>
      
    </div>
  );
}

export default App;
