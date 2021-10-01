![npm](https://img.shields.io/npm/v/insultmachine?style=plastic) ![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Barnac1ed/InsultMachine/master?style=plastic) ![GitHub branch checks state](https://img.shields.io/github/checks-status/Barnac1ed/InsultMachine/master?style=plastic) ![GitHub all releases](https://img.shields.io/github/downloads/Barnac1ed/InsultMachine/total?style=plastic)

# InsultMachine
**The official repo of __[my npm package](https://www.npmjs.com/package/insultmachine)__ that generates insults.**

`npm i insultmachine`
## Usage
First, require the package. `const Machine = require('InsultMachine');` or `import Machine from 'InsultMachine';` if you're in a module.

Then you can use randomly generated insults and compliments.
## Examples

```
console.log(Machine.InsultMachine());
// -> You're so fat that when you farted you started global warming.
```
or using Discordjs
```
if(message.content == '!insult'){
  message.channel.send(Machine.InsultMachine());
}
```
**_If you want a compliment instead of an insult, use Machine.ComplimentMachine() instead of InsultMachine()_**
