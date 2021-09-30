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
