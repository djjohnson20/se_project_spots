class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "b78caabf-43de-4c58-86fc-7378db5d190d",
      },
    }).then((res) => res.json());
  }

  // other methods for working with the API
}

export default Api;
