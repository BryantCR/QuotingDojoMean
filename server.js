var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.json()) //en el curriculum nos enseñan esta
app.use(bodyParser.urlencoded({entended: true}));

app.use(express.static(__dirname +"/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.post( '/quotes', function( request, response ){
    console.log( request.body );
    const id = Number(request.body.userId);
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const quote = request.body.userQuote;

    // Run validations to see if the 'id' is not already in the list
    const newUser = {
        id,
        firstName,
        lastName,
        quote
    };
    
    console.log( newUser );
    UserModel
        .createUser( newUser )
        .then( result => {
            console.log( result );
        })
        .catch( err => {
            console.log( "Something went wrong!" );
            console.log( err );
        })
    response.redirect( '/' );
});

app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});