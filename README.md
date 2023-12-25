# 🍎 Pyrus Server

## 📕 API Reference

-   #### Make Prediction on a image uploaded by the user

    ```http
    POST /api/prediction
    content-type: application/json

    {
        "image": "sample.jpg",
    }
    ```

    Only jpeg, jpg, png and gif image formats are supported for image upload.

## ⚙️ Technologies used

-   📌 NodeJS
-   🚂 Express JS
-   🎉 TypeScript
-   🏡 REST API
-   ⚙️ Dotenv - Supports environment variables
-   🦋 Prettier - Opinionated Code Formatter

## 🚶🏻‍♂️ Getting started

```bash
# 1. Clone the repository
$ git clone https://github.com/naman22a/sih-server

# 2. Enter your newly-cloned folder.
$ cd sih-server

# 3. Create Environment variables file.
$ cp .env.example .env

# 4. Install dependencies (preferred: yarn)
$ yarn install
```

## 🏃🏻‍♂️ Running the app

```bash
# development
$ yarn run dev

# build
$ yarn build

# production
$ yarn run start
```
