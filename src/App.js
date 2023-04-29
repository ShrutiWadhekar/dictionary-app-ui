import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import DictionaryApp from './Components/UserHome';
import KeywordList from './Components/Keyword/KeywordList';
import AddKeyword from './Components/Keyword/AddKeyword';
import SearchKeyword from './Components/Keyword/SearchKeyword';
import DeleteKeyword from './Components/Keyword/DeleteKeyword';
import EditKeyword from './Components/Keyword/EditKeyword';
import DisplayKeyword from './Components/Keyword/DisplayKeyword';
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/RegistrationPage';
import LogoutPage from './Components/LogoutPage';
import WelcomePage from './Components/WelcomePage';
import "react-alice-carousel/lib/alice-carousel.css";
import logo from './Images/logo.png'
import AdminHome from './Components/AdminHome';
import UserInfo from './Components/UserFunctions/UserInfo';
import UsersList from './Components/UserFunctions/UsersList';
import GiveAdminAccess from './Components/UserFunctions/GiveAdminAccess';
import DeleteUser from './Components/UserFunctions/DeleteUser';
import DisplayUserDetails from './Components/UserFunctions/DisplayUserDetails';
import RevokeAdminAccess from './Components/UserFunctions/RevokeAdminAccess';
import SearchKeywordAdmin from './Components/Keyword/SearchKeywordAdmin';


function App() {
  return (
    <div className="outer">
      <h1 style={{position: 'absolute', top:'10px', left: '20px', color:'cadetblue'}}><b> Techn</b><img src={logo} alt="O" width="50" height="50" radius= "20"/><b>Search </b></h1>
      <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component = {WelcomePage}></Route>
          <Route path="/login" component = {LoginPage}></Route>
          <Route path="/register" component = {RegistrationPage}></Route>
          <Route path="/logout" component = {LogoutPage}></Route>

          <Route path="/admin-home" component = {AdminHome}></Route>
          <Route path="/user-info" component = {UserInfo}></Route>
          <Route path="/list-users" component = {UsersList}></Route>
          <Route path="/admin-access" component = {GiveAdminAccess}></Route>
          <Route path="/revoke-admin-access" component = {RevokeAdminAccess}></Route>
          <Route path="/delete-user" component = {DeleteUser}></Route>
          <Route path="/display-user" component = {DisplayUserDetails}></Route>

          <Route path="/home" component = {DictionaryApp}></Route>
          <Route path="/list-keyword" component = {KeywordList}></Route>
          <Route path="/add-keyword" component = {AddKeyword}></Route>
          <Route path="/search-keyword" component = {SearchKeyword}></Route>
          <Route path="/search-keyword-admin" component = {SearchKeywordAdmin}></Route>
          <Route path="/delete-keyword" component = {DeleteKeyword}></Route>
          <Route path="/edit-keyword" component = {EditKeyword}></Route>
          <Route path="/display-keyword" component = {DisplayKeyword}></Route>

          
          <WelcomePage></WelcomePage>
        </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
