import express from "express";
import cors from "cors";
import { getReply } from "./service/chat";
import { Message } from "./types";
const server = express();
const corsmiddleware = cors();
server.use(corsmiddleware);
const bodymiddleware = express.json();
server.use(bodymiddleware);
const port = 4000;
const messages: Message[] = [];
function onListen() {
  const message = `Listening on :${port}`;
  console.info(message);
}
server.listen(port, onListen);
server.post("/message", (request, response) => {
  const userMessage = {
    text: request.body.message,
    number: messages.length + 1,
  };
  messages.push(userMessage);
  const reply = getReply(request.body.message);
  const botReply = `bot: ${reply}`;
  const botMessage = {
    text: botReply,
    number: messages.length + 1,
  };
  messages.push(botMessage);
  const responseData = {
    messages: [botMessage, userMessage],
  };
  response.send(responseData);
});
