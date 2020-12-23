<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## 토막 기록

0. express 위에서 돌아간다.

1. express에서 get.router의 역할을 @Get 데코레이터로 대체한다. 실제 비즈니스 로직을 하는 함수들은 service 파일에 들어간다. (역할 분리)
2. nestjs cli를 사용하기 때문에 컨트롤러를 커맨드라인에서 몇 줄로 생성이 가능하다
- 컨트롤러 만들기
```
nest g co
```
- 컨트롤러 이름이 movies이기 때문에 http://localhost:3000/movies 이런식으로 라우팅이 설정된다
- 동적 라우팅을 할 때는 Param값과 Get 파라미터값이 같아야 한다
- body가 필요하면 body를 요청해야하고 param이 필요하면 param을 요청해야하는 게 포인트 (nestjs가 설정한 규칙이자 구조)
- 서비스 만들기
```
nest g s
```
3. DTO 작성 (data transfer object)
- nestjs가 들어오는 쿼리에 대해 유효성 검사
- main.ts에서 app과 ValidationPipe을 ValidationPipe로 연결
```
npm i class-validator class-transformer
```
- 작성한 DTO의 쿼리들마다 class-validator 이용한 유효성 검사 추가
- ValidationPipe에 `whitelist`, `forbidNonWhitelisted` 속성값을 true로 하면 해당 dto 외의 쿼리는 아예 받지 않는다
- ValidationPipe의 `transform: true` 속성값을 이용해 url에서 string으로 들어온 id를 number로 받는다
- mapped-types은 타입을 변환시키고 사용할 수 있게 하는 패키지
```
npm i @nestjs/mapped-types
```
- 같은 dto 쿼리를 같지만 전부 필수값이 아닌 경우 PartialType 사용
- nestjs를 사용하면 typescript의 타입 지정으로 인한 보안을 이용할 수 있고 유효성 검사도 가능하다

4. 모듈 분리
- 무비 기능만하는 모듈을 앱에서 따로 분리시키기
```
nest g mo
```

5. nestjs의 dependency injection
- providers를 제공함으로서 nestjs가 service를 import하고 controller에 inject한다

6. nestjs는 `express` 프레임워크 기능을 하며, `fastify` 같은 다른 라이브러리와도 호환

7. jest는 자바스크립트를 쉽게 테스팅하는 npm 패키지
- `npm run test:cov` : 얼마나 테스트 되었는지 체크 가능
- `npm run test:watch` : 테스트 파일을 작성할 때마다 콘솔 실행
- `npm run test:e2e` : 자동 생성된 /test 폴더에서 실행 

- 1. 유닛 테스트 : 서비스에서 분리된 함수 단위의 유닛을 테스트하는 것
- 2. e2e : 사용자가 취할만한 액션들을 처음부터 끝까지 테스트하는 것 (사용자 관점 테스트)
- - 실제 어플리케이션 환경과 테스트 어플리케이션 환경을 같게 만들어 줘야 한다.
----------
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

