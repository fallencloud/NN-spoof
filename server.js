const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//serve static files
app.use(express.static(__dirname));

const server = app.listen(port, () => {
  console.info(`Now listening on port ${server.address().port}`);
});
