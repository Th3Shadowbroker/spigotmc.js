# SpigotMC.js
![](https://img.shields.io/github/issues/Th3Shadowbroker/spigotmc.js)
![](https://img.shields.io/github/forks/Th3Shadowbroker/spigotmc.js)
![](https://img.shields.io/github/stars/Th3Shadowbroker/spigotmc.js)
![](https://img.shields.io/github/license/Th3Shadowbroker/spigotmc.js)

SpigotMC.js is an API wrapper for the [XenforoResourceManageAPI](https://github.com/SpigotMC/XenforoResourceManagerAPI). This project is fully open-source.

**Using SpigotMC.js in your project**

`npm install @th3shadowbroker/spigotmc.js` or `yarn add @th3shadowbroker/spigotmc.js`

## Dependencies
**Axios**: This library uses the popular Axios REST client to perform requests to the Spigot API.

## Documentation
A full documentation can be found on [GitHub Pages](https://th3shadowbroker.github.io/spigotmc.js/).

## Usage
```typescript
import { Spigot } from '@th3shadowbroker/spigotmc.js';

new Spigot().findAuthor("th3shadowbroker")
    .then(author => {
        if (author) {
            console.log(`The authors id is ${author.id}!`);
        } else {
            console.error("Author not found!");
        }
    })
    .catch(error => {
        console.error(error);
    });
```
