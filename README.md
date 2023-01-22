# discordBotOpenAI
a discord bot that uses the GPT-3 model to respond to human prompts and return answers or images.

This bot was developed using NodeJS and Typescript.

---

## Topics 📖

- [Commands 👨‍💻](#commands-)
- [Features 🛠✨](#features-)
- [Configuration 👷‍♂️](#configuring-the-bot-%EF%B8%8F)
- [Contact 💼](#contact-)

---

## Commands 👨‍💻

- `/ajuda` - help command,  lists every other command
- `/chat` - Allows the user to talk to the bot and ask any question


## Features 🛠✨

### Answer any question 📑

Users can ask the bot a question with the /chat command and get a answer out of chatGPT-3 without the need of leaving discord.

<!-- ![notification](https://user-images.githubusercontent.com/39469125/132856636-45d1f56b-ea26-4f63-80dd-af3cc365d5ed.png) -->

---

## Configuring the bot 👷‍♂️
 
### Configurando .env

The bot will work only if you create a .env file and fill each field correctly with your info.

### Installing dependencies

Inside the project run: 

`yarn` 

### Registering discord commands: 


[discord.js guide](https://discordjs.guide/creating-your-bot/command-deployment.html#command-registration)

In order for the commands to work on the server, they need to be activated with the script: `yarn deploy-command`

The script will update the commandList for every server that the bot is currently in. This change may take a few minutes.
You need to run it everytime that you update any command on `deploy-command.js`

### Dev mode

`yarn dev`

### Production mode

`yarn start`

--- 

## Contact 💼

| <a href="https://github.com/stelianok" target="_blank">**Kauã Steliano**</a> 
| :---: 
| [![Name](https://avatars2.githubusercontent.com/u/39469125?s=460&u=97e778a861a7a42bee1b16f6be1c80467c50c1d1&v=4)](https://github.com/stelianok)    

### Kauã Steliano

Twitter:
[@Steli4nok](https://twitter.com/Steli4nok)
LinkedIn:
[Kauã Alexandro Steliano](https://www.linkedin.com/in/kauã-steliano-107620181/)
E-mail:
stelianok@gmail.com
Github: 
[Stelianok](https://github.com/stelianok)




