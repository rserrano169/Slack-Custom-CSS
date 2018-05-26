// Insert the code below into the 
//    document.addEventListener('DOMContentLoaded', function() {
// callback in
//    /Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/index.js
// on Mac

// const cssPath = 'https://cdn.rawgit.com/rserrano169/Slack-Custom-CSS/master/custom.css';
//
// let s = document.createElement('link');
// s.rel = 'stylesheet';
// s.type = 'text/css';
// s.href = cssPath;
// document.head.appendChild(s);
//
// let webviews = document.querySelectorAll(".TeamView webview");
// webviews.forEach(webview => {
//   webview.addEventListener('ipc-message', message => {
//     if (message.channel == 'didFinishLoading') {
//       let script = `
//         let s = document.createElement('link');
//         s.rel = 'stylesheet';
//         s.type = 'text/css';
//         s.href = ${cssPath};
//         document.head.appendChild(s);
//         `;
//       webview.executeJavaScript(script);
//     }
//   });
// });