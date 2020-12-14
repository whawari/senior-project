const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ 
      hi: "there", 
      done_by: {
          1: "Walid Hawari",
          2: "Ibrahim Jardani"
      } 
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
