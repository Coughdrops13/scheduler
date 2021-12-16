# Interview Scheduler


This comprehensive app allows a user to create, edit, and cancel appointments for interviews. The beauty of this ambiguous app is that users do not know what the interview is for. It could be subterfuge to collect personal data from unwitting students; it could be an interview for the job opportunity of a lifetime, or one to be the new janitor of LHL facilities. The important thing is that some interview is scheduled for some reason at a specific time with a specific person. It is within this gray area that Scheduler thrives. We like to keep our interviewees in the gray. They will be born in it, molded by it. This is the Gray Batman of applications.

## Setup
1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8000/>.
4. Go to <http://localhost:8000/> in your browser.

Repeat above steps for scheduler-api
<http://localhost:8001/>.

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Api Server (normal and test mode)

```sh
npm start
```

```sh
npm run test:server
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress E2E Tests

```sh
npm run cypress 
```

## Screenshots
!["The basic scheduler page without any exisiting interviews"](https://github.com/Coughdrops13/scheduler/blob/master/docs/basicPage.png?raw=true)

!["The book/edit interview form"](https://github.com/Coughdrops13/scheduler/blob/master/docs/bookInterview.png?raw=true)

!["The view of a booked or edited interview after saving"](https://github.com/Coughdrops13/scheduler/blob/master/docs/viewInterview.png?raw=true)

!["The confirmation required after clicking the trash icon on an existing interview"](https://github.com/Coughdrops13/scheduler/blob/master/docs/deleteInterview.png?raw=true)