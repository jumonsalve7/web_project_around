
export default class UserInfo {
  constructor({ name, profession }) {
    this._nameElement = document.querySelector(name);
    this._profession = document.querySelector(profession);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._profession.textContent,
    };
  }

  setUserInfo({ name, job }) {
    if (name) {
      this._nameElement.textContent = name;
    }
    if (job) {
      this._profession.textContent = job;
    }
  }
}
