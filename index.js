const FtpSrv = require ( 'ftp-srv' );

const hostname = '127.0.0.1';
const port = 21

const ftpServer = new FtpSrv ( 'ftp://' + hostname + ':' + port,
{ anonymous: true, greeting : [ "Hello Jong", "Wie gehts?" ] } );

ftpServer.on ( 'login', ( data, resolve, reject ) =>
{
    resolve ( { root: './dist' } );
//   console.log ( 'data: '    + data );
//   console.log ( 'resolve: ' + resolve );
//   console.log ( 'reject: '  + reject );

});

ftpServer.on ( 'client-error', (connection, context, error) =>
{
  console.log ( 'connection: ' +  connection );
  console.log ( 'context: '    +  context );
  console.log ( 'error: '      +  error );
});


ftpServer.listen()
.then(() =>
{
  console.log ( `Server running at ftp://${hostname}:${port}/` );
});