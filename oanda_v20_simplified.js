"use strict"

var common = require('@oanda/lib/common')
var config = require('@oanda/lib/config')

window.demoHostname = "api-fxpractice.oanda.com"
window.demoStreamingHostname = "stream-fxpractice.oanda.com"
window.liveHostname = "api-fxtrade.oanda.com"
window.liveStreamingHostname = "stream-fxtrade.oanda.com"

var oandaDataAPI = {}
window.oandaDataAPI = oandaDataAPI

oandaDataAPI.ctx = []
oandaDataAPI.ctxStream = []

oandaDataAPI.addToken = function (bDemo, accountId, tradeToken) {
	var hostname = null
	var streamingHostname = null

	if (!bDemo) {
		hostname = window.liveHostname
		streamingHostname = window.liveStreamingHostname
	} else {
		hostname = window.demoHostname
		streamingHostname = window.demoStreamingHostname
	}

	var conf = new config.Config(hostname, streamingHostname, accountId, tradeToken)

	this.ctx[accountId] = conf.createContext()
	this.ctxStream[accountId] = conf.createStreamingContext()
}

oandaDataAPI.removeToken = function (accountId) {
	delete this.ctx[accountId]
	delete this.ctxStream[accountId]
}

oandaDataAPI.accounts = {}

oandaDataAPI.accounts.instruments = function (accountId, queriedInstruments) {
	return new Promise (function (resolve, reject) {
		oandaDataAPI.ctx[accountId].account.instruments(
			accountId,
			queriedInstruments,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaDataAPI.instruments = {}

oandaDataAPI.instruments.candles = function (accountId, symbolName, queryParams) {
	return new Promise (function (resolve, reject) {
		oandaDataAPI.ctx[accountId].instrument.candles(
			symbolName,
			queryParams,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaDataAPI.pricing = {}

oandaDataAPI.pricing.stream = function (accountId, queriedInstruments, callback) {
	oandaDataAPI.ctxStream[accountId].pricing.stream(
		accountId,
		queriedInstruments,
		function (quoteMsg) {
			callback(quoteMsg)
		},
		function (response) {
			try {
				common.handleErrorResponse(response)
			} catch (e) {
				console.error(new Date(Date.now()).toString() + ": " + e.message)

			}
		}
	)
}
var oandaOrderAPI = {}
window.oandaOrderAPI = oandaOrderAPI

oandaOrderAPI.ctx = []
oandaOrderAPI.ctxStream = []

oandaOrderAPI.addToken = function (bDemo, accountId, tradeToken) {
	var hostname = null
	var streamingHostname = null

	if (!bDemo) {
		hostname = window.liveHostname
		streamingHostname = window.liveStreamingHostname
	} else {
		hostname = window.demoHostname
		streamingHostname = window.demoStreamingHostname
	}

	var conf = new config.Config(hostname, streamingHostname, accountId, tradeToken)

	this.ctx[accountId] = conf.createContext()
	this.ctxStream[accountId] = conf.createStreamingContext()
}

oandaOrderAPI.removeToken = function (accountId) {
	delete this.ctx[accountId]
	delete this.ctxStream[accountId]
}

oandaOrderAPI.accounts = {}

oandaOrderAPI.accounts.instruments = function (accountId, queriedInstruments) {
	return new Promise (function (resolve, reject) {
		oandaOrderAPI.ctx[accountId].account.instruments(
			accountId,
			queriedInstruments,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.accounts.getList = function () {
}

oandaOrderAPI.accounts.get = function (accountId) {
	return new Promise (function (resolve, reject) {
		oandaOrderAPI.ctx[accountId].account.get(
			accountId,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.transactions = {}

oandaOrderAPI.transactions.list = function (accountId, queryParams) {
}

oandaOrderAPI.transactions.get = function (accountId, transactionID) {
}

oandaOrderAPI.transactions.stream = function (accountId, callback) {
	oandaOrderAPI.ctxStream[accountId].transaction.stream(
		accountId,
		function (transMsg) {
			callback(transMsg)
		},
		function (response) {
			try {
				common.handleErrorResponse(response)
			} catch (e) {
				console.error(new Date(Date.now()).toString() + ": " + e.message)

			}
		}
	)
}

oandaOrderAPI.trades = {}

oandaOrderAPI.trades.list = function (accountId, queryParams) {
	return new Promise (function (resolve, reject) {
		oandaOrderAPI.ctx[accountId].trade.list(
			accountId,
			queryParams,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.trades.listOpen = function (accountId) {
	return new Promise (function (resolve, reject) {
		oandaOrderAPI.ctx[accountId].trade.listOpen(
			accountId,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.trades.get = function (accountId, tradeSpecifier) {
}

oandaOrderAPI.trades.close = function (accountId, tradeSpecifier, unitsObj) {
	return new Promise (function (resolve, reject) {
		oandaOrderAPI.ctx[accountId].trade.close(
			accountId,
			tradeSpecifier,
			unitsObj,
			function (response) {
				try {
					common.handleErrorResponse(response)
					common.dumpOrderCreateResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.trades.modify = function (accountId, tradeSpecifier, orderReqObj) {
}

oandaOrderAPI.orders = {}

oandaOrderAPI.orders.list = function (accountId, queryParams) {
	return new Promise (function (resolve, reject) {
		oandaOrderAPI.ctx[accountId].order.list(
			accountId,
			queryParams,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.orders.listPending = function (accountId) {
	return new Promise (function (resolve, reject) {
		oandaOrderAPI.ctx[accountId].order.listPending(
			accountId,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.orders.get = function (accountId, orderSpecifier) {
}

oandaOrderAPI.orders.openOrder = function (accountId, marketOrderReq) {
	return new Promise (function (resolve, reject) {
		var marketOrder = new oandaOrderAPI.ctx[accountId].order.MarketOrderRequest(marketOrderReq)

		oandaOrderAPI.ctx[accountId].order.market(
			accountId,
			marketOrder,
			function (response) {
				try {
					common.handleErrorResponse(response)
					common.dumpOrderCreateResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.orders.cancel = function (accountId, orderSpecifier) {
}

oandaOrderAPI.orders.replace = function (accountId, orderSpecifier, orderReqObj) {
}

oandaOrderAPI.positions = {}

oandaOrderAPI.positions.list = function (accountId) {
	return new Promise (function (resolve, reject) {
		oandaOrderAPI.ctx[accountId].position.list(
			accountId,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.positions.listOpen = function (accountId) {
	return new Promise (function (resolve, reject) {
		oandaOrderAPI.ctx[accountId].position.listOpen(
			accountId,
			function (response) {
				try {
					common.handleErrorResponse(response)
					resolve(response.body)
				} catch (e) {
					console.error(e.message)

					reject()
				}
			}
		)
	})
}

oandaOrderAPI.positions.get = function (accountId, instrument) {
}

oandaOrderAPI.positions.close = function (accountId, instrument, unitsObj) {
}
