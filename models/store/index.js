const mongoose = require('mongoose');
const validator = require('validator');
const {PROVIDERS, USER_SCHEMA, STORE_SCHEMA} = require('../../utils/constants')

const storeSchema = new mongoose.Schema({

    providerName: {
        type: String,
        enum: PROVIDERS,
        required: [true, 'Please tell us your provider']
    },
    url: {
        type: String,
        required: [true, 'Please tell us your store url']
    },
    apiKey: {
        type: String,
        required: true
    },
    secretKey: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: USER_SCHEMA
    }
});


const Store = mongoose.model(STORE_SCHEMA, storeSchema);

module.exports = Store;