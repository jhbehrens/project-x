# project-x

A custom alert component that can be used to trigger alerts from anywhere in the app by declaring a context.

Quickstart

```shell
$ git clone https://github.com/jhbehrens/project-x.git
$ cd project-x
$ npm install
$ npm start
```

Usage:

Add CustomAlert component where you want to display an alert and provide a context prop. If no context is provided it will default to "global"

```shell
<CustomAlert context={someContext}>
```

dispatch triggerAlert from anywhere in the app to trigger an alert for a specific context. The triggerAlert action creator expects a payload:

```shell
{
    errorlevel,
    context,
    message,
    closeable,
    timeout
}
```

errorlevel: Acceptable inputs are "info", "warning", "error", "success". Anything else will default to "info".

context: Alert will be displayed in every `<CustomAlert>` component that matches this context.

message: Provide an errormessage.

closeable: Set to true to make the alert closeable. Otherwise it will be closed after timeout is reached.

timeout: Set timeout for alert in ms. Defaults to 2000ms.


App:

Error Generator to test the `<CustomAlert>` component and create different kinds of errors.

Global errors are displayed above the Error Generator, errors with context "errorgenerator" are displayed inside the Error Generator.
