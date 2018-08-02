const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const hajar_schema = new Schema({
      conversation_id: { type: String, min: 18, max: 65, required: true },
      text: String
    });

   module.exports = mongoose.model('hajar', hajar_schema);