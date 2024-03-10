<div align="center">
<h1>ChatGPT UI</h1>
</div>

A ChatGPT web client that supports multiple users, multiple languages, and multiple database connections for persistent data storage.

The server of this project：[https://github.com/WongSaang/chatgpt-ui-server](https://github.com/WongSaang/chatgpt-ui-server)

## Documentation
- [English](https://wongsaang.github.io/chatgpt-ui/)
- [中文](https://wongsaang.github.io/chatgpt-ui/zh/)


https://user-images.githubusercontent.com/46235412/227156264-ca17ab17-999b-414f-ab06-3f75b5235bfe.mp4


```
chatgpt-ui
├─ .dockerignore
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ fsmonitor--daemon
│  │  └─ cookies
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ master
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .github
│  ├─ FUNDING.yml
│  └─ workflows
│     ├─ docker-image-static.yml
│     ├─ docker-image.yml
│     └─ docs.yml
├─ .gitignore
├─ .npmrc
├─ app.vue
├─ components
│  ├─ ApiKeyDialog.vue
│  ├─ Conversation.vue
│  ├─ DocumentsManage.vue
│  ├─ MessageActions.vue
│  ├─ ModelDialog.vue
│  ├─ ModelParameters.client.vue
│  ├─ MsgContent.vue
│  ├─ MsgEditor.vue
│  ├─ NavigationDrawer.vue
│  ├─ Prompt.vue
│  ├─ settings
│  │  └─ Languages.vue
│  ├─ Welcome.vue
│  └─ WelcomeCard.vue
├─ composables
│  ├─ fetch.js
│  └─ states.js
├─ db.sqlite3
├─ demos
│  ├─ bmc_qr.png
│  ├─ demo.gif
│  ├─ demo.mp4
│  └─ demo.png
├─ deployment.sh
├─ docker-compose.behind-traefik__swarm.yml
├─ docker-compose.dev.yml
├─ docker-compose.test.yml
├─ docker-compose.yml
├─ Dockerfile
├─ docs
│  ├─ .vuepress
│  │  ├─ config.ts
│  │  ├─ configs
│  │  │  ├─ index.ts
│  │  │  ├─ navbar
│  │  │  │  ├─ en.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ zh.ts
│  │  │  └─ sidebar
│  │  │     ├─ en.ts
│  │  │     ├─ index.ts
│  │  │     └─ zh.ts
│  │  └─ public
│  │     └─ images
│  │        └─ bmc_qr.png
│  ├─ guide
│  │  ├─ buymeacoffee.md
│  │  ├─ configuration.md
│  │  ├─ development.md
│  │  ├─ problems.md
│  │  └─ quick-start.md
│  ├─ README.md
│  └─ zh
│     ├─ guide
│     │  ├─ buymeacoffee.md
│     │  ├─ configuration.md
│     │  ├─ development.md
│     │  ├─ problems.md
│     │  └─ quick-start.md
│     └─ README.md
├─ lang
│  ├─ en-US.json
│  ├─ es-ES.json
│  ├─ fr-FR.json
│  ├─ ru-RU.json
│  └─ zh-CN.json
├─ layouts
│  ├─ default.vue
│  └─ vuetifyApp.vue
├─ LICENSE
├─ middleware
│  └─ auth.ts
├─ nginx.conf
├─ nuxt.config.ts
├─ package.json
├─ pages
│  ├─ account
│  │  ├─ onboarding.vue
│  │  ├─ resetPassword.vue
│  │  ├─ signin.vue
│  │  ├─ signup.vue
│  │  └─ verify-email.vue
│  └─ index.vue
├─ plugins
│  ├─ initApiKey.js
│  ├─ settings.js
│  └─ vuetify.js
├─ public
│  ├─ favicon.ico
│  ├─ icon-black.svg
│  ├─ icon.png
│  └─ robots.txt
├─ README.md
├─ server
│  └─ middleware
│     └─ apiProxy.ts
├─ static.Dockerfile
├─ tsconfig.json
├─ utils
│  ├─ enums.js
│  ├─ helper.js
│  └─ localStorage.js
└─ yarn.lock

```