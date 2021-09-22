This repository structure is roughly based on our UI and includes some in-browser API mocking. 
The test tasks are integrated as content. The tasks may include adding new features, fixing existing bugs and
writing tests for your new code. Tasks require that the API mocking is initialised.


## Prerequisites
- Ubuntu is recommended, but not required. Some instructions may vary depending on your operating system.
- Node Package Manager
- Git client

## Test process overview
1. Clone this repository to your local machine.
2. Install the UI dependencies and
3. serve the UI in development mode (info below).
4. Access the UI and complete the tasks described within.
5. Document your code as you think is appropriate.
6. Commit changes locally so that we can see how you work.
7. Write tests for your new features.
8. Archive the repo with your changes and send them back to us (info below).


## UI setup
1. In a terminal session, navigate to the root directory of the repository.
1. Install the UI dependencies:  
`npm install`
1. Run the UI in development mode:  
`npm run dev`

Access the UI using the URL output to the console. E.g.
> Listening on: http://localhost:3333/



### UI tests
Cypress is used to run end-to-end browser automation tests on the UI.

Tests are created as `*.spec.js` files in the `/cypress/integration` folder.

**N.B.** The UI tests rely on the UI dev server will fail if it's not available at http://localhost:3333.

From a new terminal and in the repo root folder, start the Cypress test runner with:  
`npm run test`



## Submit your completed test
Once you have finished the tasks. Please do the following:
1. Ensure all of your changes have been committed with messages.
1. Navigate to the repository root.
1. Create a bundle with the following command, replacing `<FULL_NAME>` with your full name:  
`git bundle create 'senseon_frontend_tech_test_<FULL_NAME>.git' HEAD`
