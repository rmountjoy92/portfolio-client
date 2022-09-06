// const baseUrl = "http://localhost:8000";
// const clientUrl = "http://localhost:8080";
const baseUrl = "https://api.mountjoy.tech";
const clientUrl = "https://mountjoy.tech";

class Api {
  constructor() {
    this.baseUrl = baseUrl;
    this.clientUrl = clientUrl;
  }
  async get({ endpoint, params } = {}) {
    let url = `${this.baseUrl}/${endpoint}`;
    if (params) {
      url = url + "?" + new URLSearchParams(params);
    }
    return await new Promise((resolve) => {
      fetch(url).then((response) => resolve(response.json()));
    });
  }
  async post({ endpoint, data } = {}) {
    let url = `${this.baseUrl}/${endpoint}`;
    return await new Promise((resolve) => {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => resolve(response.json()));
    });
  }
}

const api = new Api();

// Here we define a named export
// that we can later use inside .js files:
export { api, baseUrl, clientUrl };
