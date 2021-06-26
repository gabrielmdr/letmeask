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

# 🧪 Tecnologias

Este projeto foi desenvolvido usando as seguintes tecnologias:

- Firebase
- React
- Typescript

# ▶ Como executar

Clone o repositório e acesse sua pasta

```
$ git clone https://github.com/gabrielmdr/letmeask
$ cd letmeask
```

Crie um projeto do Firebase em https://console.firebase.google.com

Vá até a página do seu projeto do Firebase
- Clique no botão 'Adicionar app' e selecione 'Web'
- Escolha um nome e clique em 'Registrar app'
- Copie os valores de configuração do Firebase
- Crie um arquivo chamado **.env.local** com o seguinte formato:
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
- Copie cada atributo da configuração do Firebase e cole depois da chave correspondente
- Clique no ícone de engrenagem no canto superior esquerdo da página do seu projeto do Firebase
- Copie o Código do projeto
- Crie um arquivo chamado **.firebaserc** com o seguinte formato:
  ```
  {
    "projects": {
      "default": "CÓDIGO_DO_SEU_PROJETO"
    }
  }
  ```
- Substitua CÓDIGO_DO_SEU_PROJETO com o código do projeto que você copiou

Novamente na página do seu projeto do Firebase
- Vá até 'Realtime Database'
- Clique em 'Criar banco de dados'
- Selecione as opções padrão

Instale as dependências e inicialize o projeto

```
$ yarn
$ yarn start
```

# 💻 Projeto

Letmeask é um projeto que te permite criar salas de Q&A. Ele é ótimo para criadores de conteúdo se conectarem com sua audiência ou para educadores responderem perguntas de seus alunos.

Este projeto foi desenvolvido durante a [Next Level Week Together](https://nexelevelweek.com.br), um evento apresentado de 20 a 27 de junho de 2021 pela [Rocketseat](https://github.com/rocketseat-education) e lecionado por [Diego Fernandes](https://github.com/diego3g).

# 🔖 Layout

O layout deste projeto está disponível neste [link](https://www.figma.com/file/u0BQK8rCf2KgzcukdRRCWh/Letmeask/duplicate). É necessária uma conta do Figma.

# 📝 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE.md).