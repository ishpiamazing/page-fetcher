const request = require('request');
const fs = require('fs');
const filePath = process.argv[3]
const url = process.argv[2];
request(url, (error, response, body) => {
  if(error) {console.log('error:', error); // Print the error if one occurred
    process.exit();
  }
  if(response.statusCode !== 200) {
    console.log('Invalid status code');
    process.exit();
  }
  
  fs.access(filePath, fs.F_OK, (err) => {
  if (err) {
    console.error(err);
    process.exit();
  }
});
  fs.writeFile(filePath, body, (err) => { if(err === null) { console.log("Success")} else { console.log(err);}});

});