# Health Final

## Description

Super Health Inc. is a small regional healthcare company that operates a series of clinics. The
company has an existing application for tracking patient encounter data that has been in service for
a number of years and needs a rewrite. Super Health has hired you to rewrite the application in a
modern way using the technologies that you have trained in. At this point, Super Health Inc. is
looking for a proof of concept and will not require any authentication or authorization. The
database stores patient and encounter data, and its design is up to you. Any user can review,
create, and update patient information and encounters. The client has expressed that they would like
the project to be documented and easily maintainable.

## Prerequistes

* Node.js version 18.14.0^
* IntelliJ IDE
* Postgres DB

## Usage

Before starting the application, boot up Visual Studio Code once opened, open up the following folders to get to the correct file src > components > App.js. Once App.js is open. See #Installation/Instructions on how to install React packages. Finally type "npm start" in the terminal to start the application.

### Installation

- Clone the GitLab repository from this GitLab repo.
- Open folder inside Visual Studio Code.
- See #Usage on how to get to correct file
- Select Terminal at the top of the application, then New Terminal(A new window should appear)
- Inside this window type "npm install" to install the appropriate React packages
- Inside the Terminal type "npm install axios" to install Axios
- Inside the Terminal type "npm install react-router-dom@6" to install the React router dom
- Inside the Terminal type "npm install react-jwt" to install react java web tokens
- Inside the Terminal type "npm install -g eslint" to install eslint for linting
- Inside the Terminal type "npm i -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks" for the airbnb plugin
- Inside the Terminal type "eslint --init"
- Select the option that includes enforcing a style
- Select that the project uses modules
- Select that the project uses react
- Select that the project does not use typescript
- Select that the project runs in the browser
- Select to use a popular style guide
- Select Airbnb
- Select JavaScript for the format
- Select to install the dependencies
- Select to use npm package manager
- Inside the Terminal type "npm info "eslint-config-airbnb@latest" peerDependencies"
- Inside the Terminal type "npm install -g install-peerdeps install-peerdeps --dev eslint-config-airbnb"
- Inside the Terminal type "npm install --save prop-types"
- Inside the Terminal type "npm install --save-dev jest" to install Jest for testing

### Linting

To run linting after following the installation instructions, type "npm run lint" into the terminal.

## Testing

* To run testing on your front end application in your text editor run npm test in the command line.
* To run testing with coverage on your front end application in your text editor run npm test -- --coverage in the command line.

## Credits
Curtis Lynn
4/26/2024
Create Opportunity September 2023 Cohort
Module 7: Final Project