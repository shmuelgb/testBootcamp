// Instructions
// Choose one of th ese APIs and implement fetching from them
// with {link}:
// • Fetch data using axios
// • fetch data using the request module
// • Fetch data using another 3rd party module

const request = require("request");
const axios = require("axios");

const URL = "https://cat-fact.herokuapp.com/facts";

//! With request ===>
const fetchWithRequest = () => {
  request(
    {
      url: URL,
      json: true,
    },
    (err, response) => {
      if (err) console.log(err);
      else displayData(response.body);
    }
  );
};

const displayData = (data) => {
  data.forEach((fact) => {
    console.log(fact.text);
  });
};
// fetchWithRequest();

//! With Axios ===>
const fetchWithAxios = async () => {
  const { data } = await axios.get(URL);
  displayData(data);
};
// fetchWithAxios();
