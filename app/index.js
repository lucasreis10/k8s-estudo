const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World K8S !')
})
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
