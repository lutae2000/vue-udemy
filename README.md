## Vue.js + Vite.js 로 코칭앱 만들기 ##


##결과물
#### https://vue-http-demo-3fd16.web.app/coaches ####

## Firebase 연동 ##

#### firebase cli tool 설치 ####
```
npm install -g firebase-tools
```

#### firebase 로그인 ####
```
firebase login
```

#### firebase 초기설정 ####
```
firebase init
```
![Alt text](image.png)
#### firebase 호스팅에 배포 ####
```
git add .
git commit -m "firebase 배포 추가"
git push origin main
npm run build & firebase deploy
```
![Alt text](image-1.png)


# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
