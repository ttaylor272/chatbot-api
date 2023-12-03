"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const chat_1 = require("./service/chat");
const server = (0, express_1.default)();
const corsmiddleware = (0, cors_1.default)();
server.use(corsmiddleware);
const bodymiddleware = express_1.default.json();
server.use(bodymiddleware);
const port = 4000;
const messages = [];
function onListen() {
    const message = `Listening on :${port}`;
    console.info(message);
}
server.listen(port, onListen);
server.get("/", (request, response) => {
    response.send("hello");
});
server.get("/test", (request, response) => {
    response.send("test!");
});
server.get("/hello/:username", (request, response) => {
    const message = `hello ${request.params.username}`;
    response.send(message);
});
server.post("/data", (request, response) => {
    console.log(request.body);
    response.send(request.body);
});
server.post("/message", (request, response) => {
    const userMessage = {
        text: request.body.message,
        number: messages.length + 1
    };
    messages.push(userMessage);
    const reply = (0, chat_1.getReply)(request.body.message);
    const botReply = `bot: ${reply}`;
    const botMessage = {
        text: botReply,
        number: messages.length + 1
    };
    messages.push(botMessage);
    const responseData = {
        messages: [botMessage, userMessage]
    };
    response.send(responseData);
});
