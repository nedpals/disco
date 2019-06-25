<h1 align="center">Disco</h1>
<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/npned">
    <img alt="Twitter: npned" src="https://img.shields.io/twitter/follow/npned.svg?style=social" target="_blank" />
  </a>
</p>

> Create Discord bots fast. Easy and simple-to-use. 100% made in Typescript.

### 🏠 [Homepage](https://nedpals.github.io/disco)

## Install

```sh
npm install @nedpals/disco-js
```

## Usage

1. Create a Discord bot file.
```javascript
// HelloWorldBot.js
const Disco = require("@nedpals/disco-js");

class HelloWorld extends Disco.Bot {
  ready() {
    console.log("Hello world bot is ready!");

    client.user.setActivity(`Serving ${client.guilds.size} servers`);
  }

  hello(message, args) {
    // The user will send "/hello James" to the server.
    // And the bot, in return, will send "Hello, James!" back to the server. 
    message.channel.send(`Hello, ${args[0]}!`);
  }

  commands = {
    'hello': this.hello
  }
}

module.exports = HelloWorld;
```

2. Create an `.env` file for storing sensitive credentials.
```env
DISCORD_TOKEN=<DISCORD TOKEN HERE>
```

3. Install and run the bot.
```bash
  ./node_modules/.bin/disco run ./HelloWorldBot.js
```

4. The bot will start.

## Author

👤 **Ned Palacios**

* Twitter: [@npned](https://twitter.com/npned)
* Github: [@nedpals](https://github.com/nedpals)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/nedpals/disco/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Ned Palacios](https://github.com/nedpals).<br />
This project is [MIT](LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_