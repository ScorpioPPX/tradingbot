const express   = require( 'express' ),
      app       = express(),
      port      = 3000;

app.get('/', ( request, response ) => {
  response.send( 'Hello from Express!' );
});

app.listen( port, ( err ) => {
  if ( err ) {
    return console.log( 'something bad happened' , err );
  }

  console.log( `server is listening on ${ port }` );
});