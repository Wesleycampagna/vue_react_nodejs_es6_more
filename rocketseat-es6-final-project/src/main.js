import api from './ApiDefault'

class App {

    constructor() {
        this.repositories = []
        this.formEl = document.getElementById('repo-form')
        this.listEl = document.getElementById('repo-list')
        this.registerHandler()

        this.inputText = document.querySelector('input[name=repository]')
    }

    registerHandler() {
        // this is needed to link methods of same class
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    async addRepository(event) {
        //evita recarregar a pagina
        event.preventDefault()
        this.setLoading()

        const repoInput = this.inputText.value 

        if (repoInput === '' || 0) return


        try {
            const response = await api.get(`repos/${repoInput}`)

            console.log(response)

            // as duas formas de se fazer - desestruturação e recebendo obj.obj.(valor)
            const { description, html_url, owner: {avatar_url} } = response.data
            const name = response.data.name

            this.repositories.push({
                name,
                description,
                url: html_url,
                avatar: avatar_url
            })

            console.log(this.repositories)

            this.render()

        } catch {console.warn('ERROR repository')}

        this.setLoading(false)
    }

    setLoading (loading = true ) {

        if (loading) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('carregando..'))
            loadingEl.setAttribute('id', 'loading')

            this.formEl.appendChild(loadingEl)
        }
        else document.getElementById('loading').remove()
    }

    render() {
        this.listEl.innerHTML = ''
        this.repositories.forEach( repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let description = document.createElement('p')
            description.appendChild(document.createTextNode(repo.description))

            let url = document.createElement('a')
            url.setAttribute('target', '_blank')
            url.setAttribute('href', repo.url)
            url.appendChild(document.createTextNode('acessar'))

            let list = document.createElement('li')
            list.appendChild(imgEl)
            list.appendChild(titleEl)
            list.appendChild(description)
            list.appendChild(url)

            this.listEl.appendChild(list)

            let line = document.createElement('br')
            this.listEl.appendChild(line)

            this.inputText.value = ''
        })
    } 
}

new App()