# 🍎 Pyrus Server for Smart India Hackthon 2023

## 🤔 Problem Statement

Identification of Different Medicinal Plants/Raw materials through Image Processing Using Machine Learning Algorithms.(Problem Statement given by 🏠 **Ministry of AYUSH**)

## 💭 Description

India, with a rich heritage of floral diversity, is well-known for its medicinal plant wealth, but their identification is one of the major burning issues in Ayurvedic Pharmaceutics. Several crude drugs are being sold under the same name in the market leading to confusion and their misidentification. Even the collectors and traders are not completely aware of the exact morphological appearance or differentiating attributes of the many drugs owing to seasonal and geographical availability, and similar characteristics. Moreover, the extensive consumption to meet demand-supply ratio exerts a heavy strain on the existing resources. It further leads to the practice of adulteration, substitution, and disbelief in the curative capability of the system eventually. Thus, software capable of identifying different medicinal plants/ raw materials through Image Processing Using Different Machine Learning Algorithms will be of immense use. It will be helpful at every level viz. wholesaler, distributor, etc. of the supply chain of raw material being utilized in the system.

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

## 🪶 Features covered

-   📷 Image indentification/classification of medicinal plants using machine learning of more than 170 plants.
-   🪴 Uses and medicinal properties of plants

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

## 📫 Stay in touch

-   Author - [Naman Arora](https://namanarora.vercel.app)
-   Twitter - [@namanarora1022](https://twitter.com/namanarora1022)

## 🗒️ License

Pyrus Server is [GPL V3 licensed](LICENSE).
