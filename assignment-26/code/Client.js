const net = require("net");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new net.Socket();

const makeGETRequest = function () {
  client.connect(3001, "127.0.0.1", function () {
    client.write("GET / HTTP/1.0\r\n\r\n");
  });
};

function getInput(prompt) {
  return new Promise((resolve, reject) => {
    readline.question(prompt, (input) => resolve(input));
  });
}
const buildPostBody = async () => {
  const name = await getInput("What is your name? ");
  const age = await getInput("What is your age? ");
  const email = await getInput("What is your email? ");

  return {
    name: name,
    age: age,
    email: email,
  };
};

const makePOSTRequest = async function () {
  const obj = await buildPostBody();
  const postData = JSON.stringify(obj);
  const headers = [
    "POST / HTTP/1.0",
    `Content-Type: application/json`,
    `Content-Length: ${postData.length}`,
    "",
    postData,
    "",
  ];

  client.connect(3001, "127.0.0.1", function () {
    client.write(headers.join("\r\n"));
  });
};
const takeInput = () =>
  readline.question(`Enter a request type?`, (type) => {
    switch (type.toLowerCase()) {
      case "get":
        makeGETRequest();
        break;
      case "post":
        makePOSTRequest();
        break;
      case "exit":
        readline.close();
        console.log("---------thank you---------");
        break;
      default:
        console.log("Invalid request");
        takeInput();
        break;
    }
  });

client.on("data", function (data) {
  console.log(`Received ${data.length} bytes\n${data}`);
});

client.on("close", function () {
  console.log("Connection closed");
  takeInput();
});
takeInput();
