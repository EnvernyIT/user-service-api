const express = require("express");
const app = express();
const port = 3200;

app.get("/", (req, res) => res.json([
    {
        name: 'Enverny',
        email: 'enverny@gmail.com'
    },
    {
        name: 'Jason',
        email: 'jason@gmail.com'
    },
    {
        name: 'Fred',
        email: 'fred@gmail.com'
    },
    {
        name: "Alice",
        email:"alice@hotmail.com"
    },
    {
        name: 'jake',
        email: 'jake@yahoo.com'
    },
    {
        name: 'Jeremy',
        email: 'Lin@gmail.com'
    }
]));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
