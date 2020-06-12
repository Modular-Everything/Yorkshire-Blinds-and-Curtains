# Modular Everything Starter

## Installation

```
  # Clone the repo
  git clone ...

  # Rename the folder
  mv modular-everything-starter <project-name>

  # Change directory into the folder
  cd <project-name>

  # Install dependencies
  npm install

  # Install/update Sanity CLI
  npm install --global @sanity/cli

  # Setup sanity.io account and project
  npm run init
```

## Development

### Add your Sanity Token

Go to `https://manage.sanity.io/projects/<YourProjectId>/settings/api` (Manage -> Settings -> API), and Add New Token. Give it a label, and only **read rights**. Copy it, and paste it in the `.env` file.

```
  SANITY_TOKEN="YourToken"
```

### Run the server(s)

This command will run both Gatsby/GraphQL and Sanity Studio.

```
  npm start
  # Studio at http://localhost:3333
  # Web frontend at http://localhost:8000
  # GraphiQL explorer at http://localhost:8000/___graphql
```

You'll need to configure the 'Site Settings' before any content will show up. You can do this in Sanity Studio.

## Deployment
