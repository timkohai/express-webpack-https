# HTTPS for `localhost`

A set of scripts to quickly generate a HTTPS certificate for your local development environment.

## How-to

1. Clone this repository and `cd` into it:

```
git clone https://github.com/timkohai/express-webpack-https.git
cd express-webpack-https
```
2. Run the script to create a root certificate:

```
sh createRootCA.sh
```

3. Add the root certificate we just generated to your list of trusted certificates. This step depends on the operating system you're running:

    - **macOS**: Open Keychain Access and import the root certificate to your System keychain. Then mark the certificate as trusted.

    ![Trust root certificate](https://cdn-images-1.medium.com/max/1600/1*NWwMb0yV9ClHDj87Kug9Ng.png)

    - **Linux**: Depending on your Linux distribution, you can use `trust`, `update-ca-certificates` or another command to mark the generated root certificate as trusted.

*Note*: You may need to restart your browser to load the newly trusted root certificate correctly.

4. Run the script to create a domain certificate for `localhost`: 

```
sh createSelfSigned.sh
```

5. Move `server.key` and `server.crt` to an accessible location on your server and include them when starting it. In an Express app running on Node.js, you'd do something like this:

```js
var path = require('path')
var fs = require('fs')
var express = require('express')
var https = require('https')

var certOptions = {
  key: fs.readFileSync(path.resolve('build/cert/server.key')),
  cert: fs.readFileSync(path.resolve('build/cert/server.crt'))
}

var app = express()

var server = https.createServer(certOptions, app).listen(443)
```




## How to use Cheetah JS SDK

#### Initialize Cheetah JS SDK
```js
window.cheetahAsyncInit = function() {
    Stellar.init({
        "clientUrl": "https://vans-staging.demostellar.com",
        "clientId": ["client_id","client_secret"],
    })
}
```

### ES6 
```
import Cheetah from "cheetah-js-sdk"

// Initialize JS SDK
Cheetah.init({
    "clientUrl": "https://vans-staging.demostellar.com",
    "clientId": ["client_id","client_secret"]
})

// initialize challenges
Cheetah.ui.challenges()
```