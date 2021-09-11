**airtable-cypress-take-home-assignment**

This test should create an account and go through the onboarding process, as a standalone user.
Verify that new base have been created. 
Share the base with a collaborator via “Invite by email” flow. 
Set permission “Editor”. 
Verify that the newly collaborated user email is displayed under “Base Collaborators” and
verify that the collaborator has “Editor” role displayed under “Base Collaborators”.

**Getting started**

Install dependencies:
    1. npm install 

**Bugs:**
    Environment
MacBook pro M1, Big Sur 11.4
Google Chrome, version 92.0.4515.107 (Official Build) (x86_64 translated)
Cypress 8.0.0

1. Cypress stores users data while running test.
    Steps:
    1. Run test (first run will be successful).
    2. Run test once more.
    Actual result: after clicking "Sign up for free" button user redirects to the home page as logged in
    Expected result: after clicking "Sign up for free" button "Create your account" window appears.
       To avoid this problem when running test several times press "stop" button then press "rerun" button, before each run.
       This behavior of the program occurs only in Cypress
2. Test failing randomly while using scripts for headless run.
    Steps:
    1. Past to the package.json file scripts:
       "test:headless": "cypress run --headless",
       "bin": "./node_modules/.bin/cypress open",
    2. Run test from cypress / script
       Actual result: watch video in videos folder.
       This behavior of the program occurs only in Cypress.
       