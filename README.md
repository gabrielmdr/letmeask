<div align="center">

![Letmeask](.github/logo.svg "Letmeask")

[![stars](https://img.shields.io/github/stars/gabrielmdr/letmeask?style=social)](https://github.com/gabrielmdr/letmeask/stargazers/ "Stars")
[![forks](https://img.shields.io/github/forks/gabrielmdr/letmeask?style=social)](https://github.com/gabrielmdr/letmeask/network/members "Forks")
[![watchers](https://img.shields.io/github/watchers/gabrielmdr/letmeask?style=social)](https://github.com/gabrielmdr/letmeask/watchers/ "Watchers")

[![en](https://img.shields.io/static/v1?label=lang&message=en&color=8257E5&labelColor=000000)](README.md "English")
[![pt-br](https://img.shields.io/static/v1?label=lang&message=pt-br&color=8257E5&labelColor=000000)](README.pt-br.md "Português do Brasil")

![Letmeask mock](.github/cover.svg)

</div>
<br />

# 🧪 Technologies

This project was developed using the following technologies:

- Firebase
- React
- Typescript

# ▶ How to run

Clone the repository and access its folder

```
$ git clone https://github.com/gabrielmdr/letmeask
$ cd letmeask
```

Create a Firebase project at https://console.firebase.google.com

Go to your Firebase project page
- Click the 'Add app' button and select 'Web'
- Choose a name and click 'Register app'
- Copy the values of the Firebase configuration
- Create a file named **.env.local** with the following format:
  ```
  REACT_APP_API_KEY=
  REACT_APP_AUTH_DOMAIN=
  REACT_APP_DATABASE_URL=
  REACT_APP_PROJECT_ID=
  REACT_APP_STORAGE_BUCKET=
  REACT_APP_MESSAGE_SENDER_ID=
  REACT_APP_APP_ID=
  REACT_APP_MEASUREMENT_ID=
  ```
- Copy each Firebase configuration attribute and paste it after the corresponding key
- Click the gear icon on the top left of the Firebase project page
- Copy the Project ID
- Create a file named **.firebaserc** with the following format:
  ```
  {
    "projects": {
      "default": "YOUR_PROJECT_ID"
    }
  }
  ```
- Replace YOUR_PROJECT_ID with the project ID you copied

Again on your Firebase project page
- Go to 'Realtime Database'
- Click 'Create Database'
- Select default options

Install the dependencies and initialize the project

```
$ yarn
$ yarn start
```

# 💻 Project

Letmeask is a project that allows you to create Q&A rooms. It is great for content creators to connect with their audience or for educators to answer questions from students.

This project was developed during [Next Level Week Together](https://nexelevelweek.com.br), an event presented from 20 to 27 June 2021 by [Rocketseat](https://github.com/rocketseat-education) and tutored by [Diego Fernandes](https://github.com/diego3g).

# 🔖 Layout

The layout of the project is available at this [link](https://www.figma.com/file/u0BQK8rCf2KgzcukdRRCWh/Letmeask/duplicate). It is required a Figma account.

# 📝 License

This project is under the MIT license. Check [LICENSE](LICENSE.md).