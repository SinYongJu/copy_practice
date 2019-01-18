# ft1_kakaopage-charlie
* 카카오페이지 운영 / 찰리툴용

## 개요
* 로컬 개발용 툴
* [wiki : 필독](https://wiki.daumkakao.com/pages/viewpage.action?pageId=455851794)
* [repo : 2019-01-28 이전버전](https://github.kakaocorp.com/UIProj/kakaopage-2018)

## Command line use age
1. 터미널에 npm i -> 노드모듈 설치
2. 터미널에 npm run init -> project.json 생성 -> 옵션설정 (project.json 참조)
3. 터미널에 npm run create -> src/view/폴도구조 생성  -> README.md 작성
4. 터미널에 npm start -> 로컬서버 시작  
5. 터미널에 npm run build -- env=DEV path={날짜}_{파일명} --> view/{path} 의 _config.json 에 기입된 이미지 정보를 토대로 각 app, mo, pc 탬플릿의 이미지를 로컬로 치환
6. 터미널에 npm run build -- env=PUB path={날짜}_{파일명} --> view/{path} 의 _config.json 에 기입된 이미지 정보를 토대로 각 app, mo, pc 탬플릿의 이미지를 케이지 헤쉬아이디로 치환

## .env
* 로컬 서버 포트 기본 : 3000 (서버 중복시 (3000 + 1..반복) 포트로 리스타트 합니다)
* 포트 지정하고 싶을 경우 .env 파일에서 포트번호를 바꿔주세요

## project.json
```
{
  "name": "create-test3",-- 프로젝트 폴더 명
  "config":{
    "templates": ["app","pc", "mo"],-- 탬플릿 종류 목록
    "dependencies":["common", "player", "render", "socialShare"]-- 기능 종류 목록
  },
  "imgaes": [
    {
      "title": "test1.png",           -- 로컬 이미지 명
      "hashId": "EFSE/REFSJ/324EFSE"  -- 찰리 툴 내부 케이지 헤쉬 아이디
    } 
  ]
}
```

## version
* 19.01.15 초기 탬플릿 셋팅 및 로컬 서버 구현
* 19.01.16 공통 함수/ format 설정, project.json 추가# copy_practice
