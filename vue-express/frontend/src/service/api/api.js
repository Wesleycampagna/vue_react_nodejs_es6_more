import axios from 'axios'

const url = 'api/'

class Api {
    
    // get method
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const request = await axios.get(url)
                const data = request.data
                resolve(data.map(post => ({
                    ...post,
                    createdAt: new Date(post.createdAt)
                }))
                )
            }catch (err) {
                reject(err)
            }
        })
    }
    
    // post method
    static insertPost(text) {
        return axios.post(url, { text }) // its like { text: text }
    }

    // delete 
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default Api