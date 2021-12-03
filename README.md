## USER WEB BUILD

```
1. expo build:web 실행 -> web-build 폴더 생성됨

2. AWS IAM 설정 및 AWS CLI 설치

3. AWS S3 설정 및 AWS CloudFront 버킷과 연결 

4. React Native 프로젝트 폴더 내의 package.json 파일 수정

{
    "deploy": "aws s3 sync ./web-build s3://dzhere-web-deploy --profile=dzhere-web-deploy",
    "invalidate": "aws cloudfront create-invalidation --profile=dzhere-web-deploy --distribution-id E2G404576ZEHPW --paths / /index.html /error.html /service-worker.js /manifest.json /favicon.ico"
}
  - deploy 명령어 : AWS S3 에 React Native 정적 파일(web-build 폴더) 업로드 수행
  - invalidate 명령어 : CloudFront 객체 무효화(= purge cache) 진행
  - 객체 무효화란 ? CloudFront 에서 해당 폴더/파일에 설정해놓은 캐시를 삭제하고 원본 소스로부터 폴더/파일 정보를 다시 가져와서 캐싱하는 것
  
5. expo build:web && npm run deploy && npm run invalidate 명령어 실행

6. http://dzhere-web-deploy.s3-website.ap-northeast-2.amazonaws.com/ 접속
 ```
 
## USER APP BUILD
 ``` 
 1. expo build:app --release-channel <채널명> 실행 -> apk 또는 abb 로 build
   - 릴리즈 명을 구분해서 build 하면, 해당 릴리즈에 대해 수정사항이 생기더라도 publish 명령어를 통해 바로바로 업데이트하는 것이 가능하다.

  expo build:app --release-channel prod-v1
  expo publish --release-channel prod-v1
```
