export default class Api { 
    constructor(options){ 
        this._link = options.baseUrl,
        this._headers = options.headers
    }

    _checkResponse(res){
        if(res.ok){ 
            return res.json()
        }
        return Promise.reject(`Error ${res.status} ${res.statusText}`)
    }

    getInitialCards(){ 
      return fetch(`${this._link}/cards`, {
            method: 'GET',
            headers: this._headers
          })
          .then(this._checkResponse)
    }

    getUserFromServer(){
        return fetch(`${this._link}/users/me`, { 
            method: 'GET',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }

    setNewUserInfo(data){
       return fetch(`${this._link}/users/me`, { 
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.occupation
            }) 
        })
        .then(this._checkResponse)
    }

    deleteCard(cardId){
       return fetch(`${this._link}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }

    addCard(data){
        return fetch(`${this._link}/cards`, { 
            method: 'POST',
            headers: this._headers,
  body: JSON.stringify({
    name: data.name,
    link: data.link
  })
    })
    .then(this._checkResponse)
}

deleteLike(cardId){
    return fetch(`${this._link}/cards/${cardId}/likes`, { 
        method: 'DELETE',
        headers: this._headers
    })
    .then(this._checkResponse)
}

addLike(cardId){
return fetch(`${this._link}/cards/${cardId}/likes`, { 
    method: 'PUT',
    headers: this._headers
})
.then(this._checkResponse)
}

addNewAvatar(data){ 
    return fetch(`${this._link}/users/me/avatar`, { 
        method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
        avatar: data.avatar
    })   
    })
    .then(this._checkResponse)

}

}