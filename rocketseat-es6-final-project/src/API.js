import axios from 'axios'

class API {

    static async getUserInfo(username) {
        // se tentado executar coaxios.get(`https://api.github.com/${username}`)  dará erro
        // ogo é aconselhavel cercar com try catch
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)   
            console.log(response)
        }catch{
            console.warn('Erro na API')
        }
    }
}

API.getUserInfo('wesleycampagna')

console.log('teste')