# Fintechee-Plugin-for-Oanda-V20
This repository makes a wrapper for Oanda Nodejs V20. It simplified the usage of Oanda V20.

This Javascript library is supposed to run on a browser, but it's based on Nodejs, so, Browserify is required to convert it to a browser-based JS.

## Usage

1. npm i @oanda/v20
2. npm i -g browserify
3. copy the "lib" folder to @oanda
4. browserify oanda_v20_simplified.js -o oanda_wrapper.js
5. import the generated JS into any WEB page that you want to engage with Oanda RESTful API, just like
<script src="oanda_wrapper.js"></script>

We have made a loader to integrate with it as an example:

https://github.com/fintechee/Fintechee-Plugin-for-DATA-API/blob/main/oanda_loader.js

https://www.fintechee.com is required to run this loader.
