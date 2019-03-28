//https://api.github.com/repos/techpar/avaliacao-techpar-staging
const axios = require('axios');

axios.get(process.argv[2])
  .then(function (response) {
  	//referente ao numero de issues abertass
    console.log(response.data.open_issues_count + " issue(s)");
  });