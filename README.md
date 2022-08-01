# Typescript to MJS
This repository is a PoC and a small guide for developers who want to try Ecmascript modules but would like to use Typescript as a primary development language.

The Idea is to stop bundling the application because the ECMAScript modules [are ready and implemented in all major browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

So, this code is working in Chrome, Firefox, Safari and MS Edge (a modern one!).

This example has four Preact components written in the Typescript, so type checking is working just okay, Preact supports state, contexts and all (P)React things we love.

## Known issues
* If you're serious about ECMA modules, make sure you use HTTP/2. Good old HTTP/1 isn't good enough, because of performance issues.
* You will probably need a local web server to serve all these files. I use [this](https://deno.land/manual/examples/file_server) one, but you are free to use any.
* Keep in mind [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#browser_compatibility) table. The compatibility is good, but not perfect yet :(