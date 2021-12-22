# SpigotMC.js
SpigotMC.js is an API wrapper for the [XenforoResourceManageAPI](https://github.com/SpigotMC/XenforoResourceManagerAPI). This project is fully open-source.

**Using SpigotMC.js in your project**

`npm install @th3shadowbroker/spigotmc.js` or `yarn add @th3shadowbroker/spigotmc.js`

## Dependencies
**Axios**: This library uses the popular Axios REST client to perform requests to the Spigot API.

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