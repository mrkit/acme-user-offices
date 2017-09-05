const 
      db = require('./db'),
      Office = require('./Office'),
      User =require('./User'),
      sync = () => db.sync({ force: true });


const seed = () => {
  return Promise.all([
    Office.create({name: 'ACME', lat: 90824, lng: 92904}),
    Office.create({name: 'ACME', lat: 90824, lng: 92904}),
    User.create({ name: 'Bob'}),
    User.create({ name: 'Tom'})
  ])
  .then( ()=> {
    return sync()
  })
};

module.exports = {
  sync, seed, models: {
    
  }
}