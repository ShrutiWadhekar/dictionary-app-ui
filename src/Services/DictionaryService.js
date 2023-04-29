import axios from 'axios'

const KEYWORD_LIST = "http://localhost:8081/api/findall";
const KEYWORD_ADD = "http://localhost:8081/api/add";
const KEYWORD_SEARCH = "http://localhost:8081/api/search?name=";
const KEYWORD_DELETE = "http://localhost:8081/api/delete?name=";
const KEYWORD_EDIT = "http://localhost:8081/api/edit";


class DictionaryService {
    constructor(){
        this.name = ''
    }
    getKeywords(){
        return axios.get(KEYWORD_LIST);
    }

    addKeyword(keyword){
        return axios.post(KEYWORD_ADD, keyword);
    }

    searchKeyword(){
        console.log("In Service Search...", this.name)
        return axios.get(KEYWORD_SEARCH + this.name);
    } 
    
    deleteKeyword(name){
        return axios.delete(KEYWORD_DELETE + name);
    } 

    editKeyword(keyword){
        return axios.put(KEYWORD_EDIT, keyword);
    }
    
    setKeyword(names){
        this.name = names;
        console.log("In Service", this.name);
        console.log("In Service", names);
        return axios.get(KEYWORD_SEARCH + this.name);
    }
}

export default new DictionaryService()