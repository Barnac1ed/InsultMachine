const insults = require("./insults/insults.js");
const InsultMachine = () => {
    return insults[Math.floor(Math.random() * insults.length)];
}
module.exports.InsultMachine = InsultMachine;