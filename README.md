# sf-finance

Here will be some information about the app.
[Use this link to run application](https://jitendrazaa.github.io/firebase-lwc/)

# Why this POC Failed ?
1. Just like LWC limitation, we cant import javascript library with multiple module. Therefore , its better to have non LWC web application.

## How to run application
1. Execute this command to install LWC server locally `npm install -g lwc-services`
1. Run commans `npx create-lwc-app sf-finance` . sf-finance is name of application
1. Run command to build web app `npm run build`
1. move to directory dist
1. Push this directory `dist` in git
1. Every time code changed in `src/module/my/app/app.html` , run command to build web app `npm run build`

## Github settings
1. Enable Github.io to serve page from github hosting service directely
1. Navigate to settings | Pages | Choose Branch from where page would be served


## Running App
[Click Here](https://jitendrazaa.github.io/firebase-lwc/dist/index.html)

## Reference
[Gaurav Khetripal](https://dev.to/salesforcedevs/how-to-create-host-and-deploy-an-lwc-oss-app-1h8p)
 