require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");
const app = express();
const cors = require("cors");
app.use(json());
app.use(cors());
const port = 3005;
const { addStepOne } = require("./controller");
const { addStepTwo } = require("./controller");
const { addStepThree } = require("./controller");
const { getHouses } = require("./controller");
const { getHouse } = require("./controller");
const { editHouse } = require("./controller");

massive(process.env.STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);

    // dbInstance
    //   .create_table()
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));
  })
  .catch(error => console.log(error));

app.post("/api/houses", addStepOne);
app.post("/api/houses/img", addStepTwo);
app.post("/api/houses/rent", addStepThree);
app.get("/api/houses", getHouses);
app.get("/api/houses/:id", getHouse);
app.put("/api/houses/:id", editHouse);

app.listen(port, () => console.log(`Listening on ${port}`));
