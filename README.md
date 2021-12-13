# 더조은Here
### 🐥 더조은Here 는 WEB/Mobile APP 크로스 플랫폼 출결 관리 서비스 입니다. 🐥  
#### - WEB : 관리자 버전 (http://dzhere-web-deploy.s3-website.ap-northeast-2.amazonaws.com/)  
#### - Mobile : 사용자 버전 (https://play.google.com/store/apps/details?id=com.dzhere.DHere)  
![Frame 9 (10)](https://user-images.githubusercontent.com/46439700/145741040-a4c10e4a-b3db-4028-8388-85cf893886d0.png)


## 서비스 개요
![image](https://user-images.githubusercontent.com/46439700/145102753-1c1b3c56-ad9f-4a7b-b66b-d612761030cf.png)

react native 구조 상 프로젝트 내에서 일반적으로 두 개의 App.js 를 가진다.

|Directory|Path|Note|
|---------|----|----|
|assets | {directory}| image 및 icon 디렉토리 별로 구분|
|src | component| screen 별로 `component` 구분을 위한 디렉토리|
|src | container| `redux 및 hook, function` 을 사용하여 기능 구현을 하는 screen 별 디렉토리|
|src | lib/api| container 단위로 사용되는 `api query` 를 구분하기 위한 디렉토리|
|src | modules| container 단위로 상태관리에 사용될 `action, reducer` 을 구분하기 위한 디렉토리|
|src | pages| react-navigation 의 `drawer item` 별로 구분|
|src | App.js| root app 을 navigation container 로 감싸서 경로 설정을 가능하도록 하는 app 파일|
|./ | App.js | store 및 rootReducer 를 세팅하는 root app|



## 화면 설계
![image](https://user-images.githubusercontent.com/46439700/145741486-a4fcda42-3a27-4d56-8387-860121c41dd4.png)

## 스택
|Skill|Version|Content|
|---------|----|-------|
|react-native | 0.64.3| APP 개발 시 중점적으로 사용|
|react.js | 17.0.1| WEB 개발 시 일부 사용|
|react-redux | 7.2.6| react 앱 상태관리를 위해 redux 사용|
|mysql | 8.0.x| DB|
|mybatis | 3.x.x| java 코드 annotation 방식|
|expo cli | 43.0.2| develope tool|
|spring-boot | jdk 11| client-server 간의 데이터 전달을 위한 API 쿼리 작성|
|spring-security | jdk 11| 회원관리를 위한 auth 인증 체계 구축 (jwt)|
|aws rds | mysql| DB 접근을 위한 DB 서버 구축|
|aws s3 & aws cloudfront & aws ec2 | storage| static web 을 위한 호스팅|


## 웹 기술 스택
![image](https://user-images.githubusercontent.com/46439700/145741370-93e249b1-95bf-4558-94ed-2f2d7476540b.png)


## 모바일 기술 스택
![image](https://user-images.githubusercontent.com/46439700/145741392-fc9ee3de-c803-42ea-9c42-2bbc8fac33ea.png)


## 역할
|  이름  | 역할                 | github                                                       |
| :----: | :-------------------: | :-----------------------------------------------------------: |
| 김령은 | Developer | [@RyeongeunKim](https://github.com/RyeongeunKim)            |
| 김상연 | Developer | [@cafe9210](https://github.com/cafe9210)                    |
| 박정민 | Developer | [@qwa310](https://github.com/qwa310)                        |
| 최예준(Lead) | Developer | [@linger0310](https://github.com/linger0310)          |
