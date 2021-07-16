/*Vai conter todos os serviços de autenticação*/

import axios from '../utils/axios';

class AuthService{

    signIn = (email, password) => {
        /*resolve = quando quero retornar algum resultado positivo*/
        /*reject = resultado negativo/erro/exceção*/
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', {email, password})
            .then(response => {
                if(response.data.user){
                    //this.setUser(response.data.user)
                    resolve(response.data.user)
                }else{
                    reject(response.data.error)
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    setUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user))
    }

    getUser = () => {
        const user = localStorage.getItem("user");
        if(user){
        /*vai transformar a string em objeto, fica mais facil acessar dados*/
            return JSON.parse(user)
        }
        return user;
    }

    /*se getUser retornar vazio vai retornar false*/
    /*se getUser retornar um objeto ou um valor vai retornar true*/
    isAuthenticated = () => !!this.getUser();
    

}

const authService = new AuthService();

export default authService;