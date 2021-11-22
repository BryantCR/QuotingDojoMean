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
    }
};

module.exports = {UserModel};
