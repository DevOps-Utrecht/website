# DevOps website

## Setting up the project for development

The DevOps website is build with [Gatsby](https://www.gatsbyjs.org/ "Gatsbyjs Homepage"), a static site generator for React. To set up a local version of this project follow these steps:

- Clone the github repository:

Run `git clone git@github.com:DevOps/website.git` or dowload the project manually.

- Change into download directory:

Run `cd website`

- Install gatsby-cli:

In order to download gatsby, the `npm` package manager is needed.

Run `npm install --global gatsby-cli`

- Install project dependencies:

This can be done by running `npm install` in the project folder.

- Start the development server:

Run `gatsby develop`

This will start a gatsby development server accessible via browser on `localhost:8000`.
Any changes too the code will automatically be updated on the website after the file is saved.

The server can be stopped by throwing a KeyboardIterrupt ( `Ctrl+C` ) on the command line.
