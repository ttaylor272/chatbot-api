"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReply = void 0;
const greetings = ['hello', 'hi', 'greetings'];
function getReply(input) {
    const isGreeting = greetings.includes(input);
    if (isGreeting) {
        return "Hi";
    }
    try {
        const result = eval(input);
        console.log(result);
        const reply = `answer is ${result}`;
        return reply;
    }
    catch (error) {
        console.warn("eval failed");
    }
    return "I don't Understand";
}
exports.getReply = getReply;
