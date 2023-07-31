export default class UserInfo {
  constructor({ nameSelector, occupationSelector }) {
    this._username = document.querySelector(nameSelector);
    this._occupation = document.querySelector(occupationSelector);
  }

  getUserInfo() {
    const data = {};
    (data.occupation = this._occupation.textContent),
      (data.username = this._username.textContent);
    return data;
  }

  setUserInfo(data) {
    (this._username.textContent = data.username),
      (this._occupation.textContent = data.occupation);
  }
}


