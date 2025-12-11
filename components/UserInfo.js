export default class UserInfo {
  constructor({ name, profession }) {
    this._nameElement = document.querySelector(name);
    this._profession = document.querySelector(profession);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      profession: this._profession.textContent,
    };
  }

  setUserInfo({ name, profession }) {
    if (name) {
      this._nameElement.textContent = name;

      if (profession) this._profession.textContent = profession;
    }
  }
}
