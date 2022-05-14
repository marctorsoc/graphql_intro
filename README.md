# What

A toy example of graphql. Sources:
* https://www.youtube.com/watch?v=ZQL7tL2S0oQ
* https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f
* https://fullstackopen.com/en/part8

... this is a work in progress ...
Missing:
- Solve TODOs
- Add some Frontend
- Use a Database

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

## How to install packages with yarn

To recreate what's needed for this toy project:

```
brew install yarn
yarn install
```

In general, we could do like 

```
yarn add express express-graphql graphql
yarn add --dev nodemon
``` 

This would generate the file `yarn.lock` which is the analogous to
`requirements.txt` in Python, and these packages to `package.json`.

## How to run the server

`yarn run devStart`

and go to `localhost:5000/graphiql`


# Example queries and mutations

```
query Queries{
  authors {
    #id,
    name,
    #num_books,
    yearBorn,
    age,
    #books {
    #  name
    #},
  },
  #author(id: "0770663089") {
  #  name
  #},
  #books {
  #  id,
  #  name,
  #  year,
  #  author {
  #    name
  #  }
  #},
  #books {
  #  id,
  #},
  #book(id: "1297929770") {
  #  name,
  #  year,
  #  author {
  #  	name,
  #	}
  #},
  #books_where(id: "1297929770", year: 1942) {
  #  name,
  #  author {
  #    name
  #  },
  #  year
  #},
}

mutation addMarc{
  addAuthor(
    name: "Marc",
    yearBorn: 1988,
  ){
    id,
    name,
    yearBorn,
    yearDeath
  }
}
```

