const {USER_SCHEMA,STORE_SCHEMA} = require('../utils/constants')

module.exports= {
[USER_SCHEMA]:require('./user'),
[STORE_SCHEMA] :require('./store')
}