const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },
    lastName : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },
    id : {
        type : Number,
        required : true,
        unique : true
    },
    quote : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 3000
    },
    created_at : {
        type : Date
    },
    updated_at : {
        type : Date
    }
});

const User = mongoose.model( 'users', UserSchema );

const UserModel = {
    createUser : function( newUser ){
        return User.create( newUser );
    },
    getUsers : function(){
        return User.find();
    },
    getUserById : function( userId ){
        return User.findOne({ id : userId });
    },
    getQuotes: function(){
        return User.find().sort( { created_at: -1 } );
    }
};

module.exports = {UserModel};

