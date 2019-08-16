const {Schema, model} = require('mongoose');


//Estrutura da tabela no banco
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,

    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],

    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }]

}, {
    timestamps: true,
});

//exportando model
module.exports = model('Dev', DevSchema);