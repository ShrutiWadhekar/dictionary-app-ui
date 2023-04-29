import axios from 'axios'

const LOG_IN = "http://localhost:8081/api/auth/login";
const REGISTER = "http://localhost:8081/api/auth/addUser";
const IS_ADMIN = "http://localhost:8081/api/auth/isAdmin?name=";
const USER_INFO = "http://localhost:8081/api/userinfo";
const USER_LIST = "http://localhost:8081/api/admin/allUsers";
const ADMIN_ACCESS = "http://localhost:8081/api/admin/giveAdminAccess?name=";
const REVOKE_ADMIN_ACCESS = "http://localhost:8081/api/admin/revokeAdminAccess?name=";
const DELETE_USER = "http://localhost:8081/api/admin/deleteUser?name=";
const DISPLAY_USER = "http://localhost:8081/api/admin/findUser?name=";

class AuthService {

    loginUser(userInfo){
        return axios.post(LOG_IN, userInfo);
    }

    registerUser(userInfo){
        return axios.post(REGISTER, userInfo);
    }

    isAdmin(username){
        return axios.post(IS_ADMIN + username);
    }

    getUserInfo(){
        return axios.get(USER_INFO);
    }

    getAllUsers(){
        return axios.get(USER_LIST);
    }

    giveAdminAccess(username){
        return axios.post(ADMIN_ACCESS + username);
    }

    revokeAdminAccess(username){
        return axios.post(REVOKE_ADMIN_ACCESS + username);
    }

    deleteUser(username){
        return axios.delete(DELETE_USER + username);
    }

    displayUser(username){
        return axios.get(DISPLAY_USER + username);
    }

}

export default new AuthService()