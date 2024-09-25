# Book Management API - NestJS GraphQL Example

This is a simple Book Management API built with [NestJS](https://nestjs.com/) using [GraphQL](https://graphql.org/) and Apollo Server.

## Technologies

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- TypeScript

## Prerequisites

Before you begin, ensure you have the following tools installed on your machine:

- Node.js (version 14 or higher)
- npm (or yarn)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/book-management-graphql.git
cd book-management-graphql
```

### 2. Install dependices

```bash
npm install
yarn upgrade
```

### 3. Run the app

```bash
npm run start:dev
yarn start:dev
```

This will start the server on http://localhost:3000/graphql.

### 4. Example Queries and Mutations

## Create Book

```graphql
mutation {
  createBook(
    createBookInput: {
      title: "1984"
      author: "George Orwell"
      publishedYear: 1949
    }
  ) {
    id
    title
    author
    publishedYear
  }
}
```

## Get All Books

```graphql
query {
  books {
    id
    title
    author
    publishedYear
  }
}
```

## Get a book by Id

```graphql
query {
  book(id: 1) {
    id
    title
    author
    publishedYear
  }
}
```

## Delete a Book

```graphql
mutation {
  removeBook(id: 1) {
    id
    title
  }
}
```
