const db = require('../config/connection');
const { User, Trail, Trip } = require('../models');
const userSeeds = require('./userSeeds.json');
const trailSeeds = require('./trailSeeds.json');
const tripSeeds = require('./tripSeeds.json');

db.once('open', async () => {
  try {
    await Trip.deleteMany({});
    await Trail.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < trailSeeds.length; i++) {
      const { _id, trailAuthor } = await Trail.create(trailSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: trailAuthor },
        {
          $addToSet: {
            trails: _id,
          },
        }
      );
    }
    for (let i = 0; i < tripSeeds.length; i++) {
      const { _id, tripAuthor } = await Trip.create(tripSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: tripAuthor },
        {
          $addToSet: {
            trips: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});