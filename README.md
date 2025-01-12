# Angular 1.x Wrapper for auth0-spa-js

This module provides a thin wrapper for [auth0-spa-js](https://auth0.com/docs/libraries/auth0-spa-js).

### This is angular-auth0-spa-js v4 which is to be used with auth0-spa-js v1.17 and higher. 

You may find the reference samples using this library [here](https://github.com/saltukalakus/auth0-angularjs-samples-spa-js)

## Installation

```bash
# installation with npm
npm install --save angular-auth0-spa-js

# installation with yarn
yarn add angular-auth0-spa-js

# installation with bower
bower install --save saltukalakus/angular-auth0-spa-js
```

Ensure that both `auth0-spa-js` and `angular-auth0-spa-js.js` are loaded on the page.

```html
<!-- installed with npm or yarn --> 
<script src="node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js"></script>
<script src="node_modules/angular-auth0-spa-js/dist/angular-auth0-spa-js.js"></script>
```

```html
<!-- installed with bower --> 
<script src="bower_components/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js"></script>
<script src="bower_components/angular-auth0-spa-js/dist/angular-auth0-spa-js.js"></script>
```

## Usage

Bring in the `auth0.auth0` module.

```js
var app = angular.module('myApp', ['auth0.auth0']);
```

Configure auth0-spa-js by using `angularAuth0Provider`. If you haven't done so yet, [sign up for Auth0](https://auth0.com/signup), create a client app, and get your clientID and domain. To learn more about auth0-spa-js' API and the options it takes, see the [API documentation](https://auth0.com/docs/libraries/auth0-single-page-app-sdk).

```js
app.config(function(angularAuth0Provider) {

  angularAuth0Provider.init({
    client_id: AUTH0_CLIENT_ID,
    domain: AUTH0_DOMAIN,
    redirect_uri: AUTH0_CALLBACK_URL,
    scope: 'openid'
  });
  
});
```

Use `auth0-spa-js` from a controller or service.

```js
app.controller('loginController', function(angularAuth0) {

  var vm = this;
  vm.angularAuth0 = angularAuth0;
  
});
```

```html
<div ng-controller="loginController as vm">

  <button ng-click="vm.login(options)">Log In</button>

</div>
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [JSON Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

Saltuk Alakus

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
