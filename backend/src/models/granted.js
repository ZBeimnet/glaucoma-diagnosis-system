const mongoose = require('mongoose');

const schema = mongoose.Schema;

const grantedSchema = new schema({
    healthcenter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"healthcenter"
    }
});
const granted = mongoose.model("granted",grantedSchema);

module.exports = granted;