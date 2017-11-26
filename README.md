# Project Title

Accounts and Transactions Overview

# Project Description

This Project is about Displaying Bank Accounts details of User.
Application is responsive and works on almost all major browsers.

### Tech

Application uses a number of open source projects to work properly:

* [react]
* [redux]
* [ES6]
* [webpack]
* [node.js]
* [mocha]
* [Babel]


### Installation

Requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd accountOverview
$ npm install
$ npm start
  Open 'localhost:8888'
```

```
Another way to run this application (without npm install) is by opening 'index.html' in any browser.
```

### Prerequisites
To run Backend services:
 
```sh
$ cd accountOverview/apiserver
$ npm install
$ node server.js
```

### Application Flow

Application has 3 sections. 

1. Account overview
```
  - Details of Users like name, iBan no and total balance amount will be diplayed in this section
- If service is down then you can click refresh icon to fetch Account Details
```
2. Add Debit and Credit
```
- User has possibility to add Debit and Credit transaction details. 
- User has to select one type of transaction by toggling Radio buttons.
- From/To, Description and Amount are mandatory fields where Date is optional. If User does not select Date from UI then by default system date will be saved.
- User must provide time(HH:MM) while selecting date from UI. Otherwise applicaton won't be submitted.
- Total Balance and Transaction list is updated immediately after submitting form.
- Validations are provided to all fields.

```
3. Transactions Overview
```
- Details of each transactions are displayed under this section
- This list is sorted by recent transaction.
- This list is scrollable
- If service is down then you can click refresh icon to fetch Transaction list

```

## Running the tests

```
'npm run test' will execute tests

```
