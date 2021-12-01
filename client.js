const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to the server");
    conn.write('Name: MD2');
    // conn.write("Move: up");
    // setInterval(() => {conn.write("Move: right")},2000) ;
  });

  return conn;
};

module.exports = { connect };