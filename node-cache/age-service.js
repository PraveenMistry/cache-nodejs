//Import the cache module we just created
const cache = require('./cache');

const ages = {
  John: '20',
  Michelle: '34',
  Amy: '31',
  Doug: '22'
}

const getAgeFromDb = (name, cb) => setTimeout(() => {
  console.log('Fetching from db')
  const age = ages[name] || 'Does not exist'
  cb(age)
}, 1000)


module.exports = (name, cb) => {
   age = cache.get(name);
    if ( age === undefined ){
      getAgeFromDb(name, age => {
        cache.set(name, age, () => {
          console.log("set")
          cb(age)
        })
      });
    }else{
      console.log('Fetching from Cache')
      return cb(age);
    }
}
 