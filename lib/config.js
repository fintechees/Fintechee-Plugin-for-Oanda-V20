"use strict";

var Context = require('@oanda/v20/context').Context;

class Config {
    constructor(hostname, streamingHostname, accountId, tradeToken) {
        this.hostname = hostname;
        this.streamingHostname = streamingHostname;
        this.port = 443;
        this.ssl = true;
        this.token = tradeToken;
        this.username = "";
        this.accounts = [accountId];
        this.activeAccount = accountId;
    }

    createContext() {
        let ctx = new Context(
            this.hostname,
            this.port,
            this.ssl,
            "oanda sample javascript"
        );

        ctx.setToken(this.token);

        return ctx;
    }

    createStreamingContext() {
        let ctx = new Context(
            this.streamingHostname,
            this.port,
            this.ssl,
            "oanda sample streaming javascript"
        );

        ctx.setToken(this.token);

        return ctx;
    }
}

exports.Config = Config;
