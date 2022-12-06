const axios = require("axios");
const thirdPartAPI = require("../configs/thirdPartAPI").data;

// @desc    Filter Top five cat breeds data
// @route   GET /api/cat/filter/topbreeds
// @access  Public
const getTopBreeds = async (req, res) => {
  try {
    let urlPayload = JSON.parse(JSON.stringify(thirdPartAPI.getBreedsAPI));
    let restResult = await axios(urlPayload);
    if (restResult.status) {
      let items = [];
      await restResult.data.map((breed, i) => {
        let friendly_weightage =
          breed.child_friendly + breed.dog_friendly + breed.stranger_friendly;
        let weighting_factor = 0.33;
        let weighted_avg = friendly_weightage * weighting_factor;
        let jsonData = {
          id: breed.id,
          friendly_weightage,
          weighting_factor,
          weighted_avg,
        };
        items.push(jsonData);
      });
      let sortedResult = items
        .sort((a, b) => b.weighted_avg - a.weighted_avg)
        .slice(0, 5);
      const newArr = sortedResult.map((item) => {
        const result = restResult.data.filter((breed) => breed.id === item.id);
        return { ...result };
      });
      res.status(200).json({
        message: "Top 5 cat breeds",
        newArr,
      });
    } else {
      throw new Error("Bad response from The cat Api");
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong with The Cat Api. Please come back later.",
    });
  }
};
module.exports = {
  getTopBreeds,
};
