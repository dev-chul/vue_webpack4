# fw-workspaces

앞으로 개인적으로 공부한 프레임워크 설정들이 올라갈 레파지토리입니다.

# vue 4.0으로 업그레이드 시 주의할 점
1. npm global 옵션 충돌
 : global 설치 제거

> npm uninstall -g webpack 

> npm uninstall -g webpack-dev-server

> npm uninstall -g webpack-cli
 
2. npm run or build log를 보면 충돌하는 모듈 발생
 : 해당 모듈 +1.0.0 씩 버전 업그레이드 
