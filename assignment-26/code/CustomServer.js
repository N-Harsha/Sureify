const net = require("net");

let data = [
  {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  },
];

const server = net.createServer(function (socket) {
  socket.on("data", function (buffer) {
    const request = buffer.toString();

    if (request.startsWith("GET")) {
      socket.write(
        `HTTP/1.0 200 OK\r\nContent-Type: application/json\r\n\r\n${JSON.stringify(
          data
        )}`
      );
    } else if (request.startsWith("POST")) {
      const body = request.split("\r\n\r\n")[1];
      const newData = JSON.parse(body);
      data.push(newData);
      socket.write(
        `HTTP/1.0 200 OK\r\nContent-Type: application/json\r\n\r\n${JSON.stringify(
          data
        )}`
      );
    } else {
      socket.write(`HTTP/1.0 404 Not Found\r\n\r\n`);
    }

    socket.end();
  });
});

server.listen(3001, function () {
  console.log("Server listening on port 3001");
});
