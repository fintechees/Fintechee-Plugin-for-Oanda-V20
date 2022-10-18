> ## Anti-Racism Announcement!
> ### WE ABSOLUTELY DISALLOW PROVIDING OUR SERVICE/PRODUCT/WHITE-LABEL TO ANY RACIST OR RACIST-SUPPORTED BUSINESS.
> ### ESPECIALLY AGAINST A NOTORIOUS RACIST JESSE NICKLES, HE IS ABSOLUTELY ON OUR BLACKLIST FOREVER!
> ### TO KNOW WHO JESSE NICKLES IS AND WHAT HE IS DOING, PLEASE CHECK THIS REVIEW POSTED BY A VICTIM:
> https://wpjohnny.com/littlebizzy-jesse-nickles-fraud-slander-alert/
>
> https://slickstack.icu/
> ### OR THIS CLAIM(TO TAKE DOWN HIS INDEX ON GOOGLE) SUBMITTED BY ANOTHER VICTIM
> https://www.lumendatabase.org/notices/28558356
> ### OR THIS LAWSUIT AGAINST HIM BY HIS ALMA MATER
> https://cite.case.law/frd/304/594/
> ### JESSE NICKLES' GITHUB USERNAME: jessuppi




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

### Line 660 in pricing.js(@oanda) needs to be modified before you browserify oanda_v20_simplified.js.

- Wrong:   streamChunkHandler(new Price(msg));
- Correct: streamChunkHandler(new pricing_common.Price(msg));

## Example

We have made a loader to integrate with it as an example:

https://github.com/fintechee/Fintechee-Plugin-for-DATA-API/blob/main/oanda_loader.js

https://www.fintechee.com is required to run this loader.

## License

### Fintechee License

Fintechee License = MIT License + Restrictions for Racists

