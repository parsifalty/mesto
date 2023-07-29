
export default class UserInfo { 
    constructor({nameSelector, occupationSelector}){ 
        this._name = document.querySelector(nameSelector)
        this._occupation = document.querySelector(occupationSelector)
    }

    getUserInfo(){ 
    const data = {}
    data.occupation =  this._occupation.textContent,
    data.name = this._name.textContent;
    return data
    }

    setUserInfo(data){ 
        this._name.textContent = data.name,
        this._occupation.textContent = data.occupation
    }
}

// open 
