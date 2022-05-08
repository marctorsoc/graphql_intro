# What

A toy example of graphql.

# Background

In `node.js` there is no concept of virtual environment. 
We just install all packages to the base and when changing 
to a new project just change to the version of that package.

There are two main package providers:
- `npm`
- `yarn`

In both cases, the file `package.json` is the equivalent to 
`setup.py` in Python. It specifies the package constraints e.g. 
"^2.0.16" means ">=2.0.16 <3.0.0".

At Globality we use `yarn` and that's why I will follow the
tutorial in this [video](`https://www.youtube.com/watch?v=ZQL7tL2S0oQ`) but
using `yarn`.

## How to install packages with yarn

To recreate what's needed for this toy project:

```
brew install yarn
yarn add express express-graphql graphql
yarn add --dev nodemon
``` 

This will generate the file `yarn.lock` which is the analogous to
`requirements.txt` in Python. 

## How to run the server

`yarn run devStart`

and go to `localhost:5000`

