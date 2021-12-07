# 더조은Here
Douzone 풀스택 개발자 교육과정 5기 2조 최종 프로젝트

## 프로젝트 구조 (Cross-Platform)

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


## 스택
|Skills|Version|
|---------|----|
|react-native | 0.64.3| APP 개발 시 중점적으로 사용|
|react.js | 17.0.1| WEB 개발 시 일부 사용|
|react-redux | ^7.2.6| react 앱 상태관리를 위해 redux 사용|
|mysql | 8.0.x| DB|
|expo cli | ~43.0.2| develope tool|
|spring-boot | jdk 11| client-server 간의 데이터 전달을 위한 API 쿼리 작성|
|spring-security | jdk 11| 회원관리를 위한 auth 인증 체계 구축 (jwt)|
|aws rds | mysql| DB 접근을 위하 DB 서버 구축|
|aws s3 & aws cloudfront & aws ec2 | storage| static web 을 위한 호스팅|
