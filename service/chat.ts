const greetings =['hello','hi','greetings']
export function getReply(input: string) {
  const isGreeting = greetings.includes(input)
  if (isGreeting) {
    return "Hi";
  }
  try {
    const result = eval(input)
    console.log(result);
     const reply = `answer is ${result}`
    return reply
  } catch (error) {
    console.warn("eval failed")
  }
   
  return "I don't Understand";
}
