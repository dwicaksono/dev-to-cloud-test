let express = require("express");
let app = express();
let port = 3000;

// get '/' =>> hello
// app.get("*", (reg, res) => res.send("HOME"));
app.get("/", (reg, res) => res.send("hello"));
app.get("/kucing", (reg, res) => res.send("MEOW..MEOW"));
app.get("/oi", (reg, res) => res.send("oi..oi..oi"));
app.get("/oi/:suboi", (reg, res) => res.send("sub..oi..oi"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// app.listen(port);
