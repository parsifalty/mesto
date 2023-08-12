export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    const data = {};
    (data.about = this._about.textContent),
      (data.name = this._name.textContent);
    return data;
  }

  setUserInfo(data) {
    (this._name.textContent = data.name ? data.name : this._name.textContent),
      (this._about.textContent = data.about ? data.about : this._about.textContent)
  }

  setUserAvatar(data) {
 (this._avatar.src = data.avatar ? data.avatar : this._avatar.src)
  }
}


