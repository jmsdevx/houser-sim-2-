module.exports = {
  addStepOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const { datname, dataddress, datcity, datstate, datzip } = req.body;

    dbInstance
      .add_house([datname, dataddress, datcity, datstate, datzip])
      .then(response => res.sendStatus(200))
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  },
  addStepTwo: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const { house_image, datname } = req.body;

    dbInstance
      .add_image([house_image, datname])
      .then(response => res.sendStatus(200))
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  },
  addStepThree: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const { mortgageamt, rent, datname } = req.body;

    dbInstance
      .add_rent([mortgageamt, rent, datname])
      .then(response => res.sendStatus(200))
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  },

  getHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_houses()
      .then(response => res.status(200).json(response))
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  },

  getHouse: (req, res, next) => {
    console.log("HIT!");
    const dbInstance = req.app.get("db");
    console.log(req.params.id);
    dbInstance
      .get_house(req.params.id)
      .then(response => res.status(200).json(response))
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  },

  editHouse: (req, res, next) => {
    const { id } = req.params;
    const {
      datname,
      dataddress,
      datcity,
      datstate,
      datzip,
      house_image,
      mortgageamt,
      rent
    } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .edit_house([
        id,
        datname,
        dataddress,
        datcity,
        datstate,
        datzip,
        house_image,
        mortgageamt,
        rent
      ])
      .then(response => {
        console.log(`"new obj: " ${response}`);
        res.status(200).send(response);
      })
      .catch(e => res.status(500).send(e));
  },

  deleteAnimal(req, res) {
    const { id } = req.params;
    const dbInstance = req.app.get("db");

    dbInstance
      .delete_animal(id)
      .then(response => {
        // console.log(`"newArr:" ${response}`);
        res.status(200).send(response);
      })
      .catch(e => res.status(500).send(e));
  }
};
