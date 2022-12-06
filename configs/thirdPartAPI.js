require("dotenv/config");
let data = {
  getBreedsAPI: {
    method: "GET",
    url: process.env.getBreedsURL,
    headers: {
      contentType: "application/data",
    },
    // auth: {
    //   username: process.env.Username,
    //   password: process.env.Password,
    // },
  },
};

module.exports = { data };
