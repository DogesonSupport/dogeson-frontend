"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a, _b, _c, _d, _e, _f, _g;
exports.__esModule = true;
exports.BETTER_TRADE_LINK_THRESHOLD = exports.MIN_ETH = exports.BLOCKED_PRICE_IMPACT_NON_EXPERT = exports.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = exports.ALLOWED_PRICE_IMPACT_HIGH = exports.ALLOWED_PRICE_IMPACT_MEDIUM = exports.ALLOWED_PRICE_IMPACT_LOW = exports.BIPS_BASE = exports.ONE_BIPS = exports.DEFAULT_DEADLINE_FROM_NOW = exports.INITIAL_ALLOWED_SLIPPAGE = exports.NetworkContextName = exports.SUPPORTED_WALLETS = exports.PINNED_PAIRS = exports.BASES_TO_TRACK_LIQUIDITY_FOR = exports.SUGGESTED_BASES = exports.CUSTOM_BASES = exports.BASES_TO_CHECK_TRADES_AGAINST = exports.ETH = exports.DOT = exports.EOS = exports.USDT = exports.BUSD = exports.DAI = exports.ROUTER_ADDRESS = void 0;
var sdk_1 = require("@pancakeswap-libs/sdk");
// import { bsc, fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'
var connectors_1 = require("../connectors");
// TODO
// export const ROUTER_ADDRESS = '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F'
// export const ROUTER_ADDRESS = '0xD99D1c33F9fC3444f8101754aBC46c52416550D1' // pancakeswap router for testnet
exports.ROUTER_ADDRESS = '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3 '; // pancakeswap router for pancake.kiemtienonline360.com
exports.DAI = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin');
exports.BUSD = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD');
exports.USDT = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD');
exports.EOS = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6', 18, 'EOS', 'EOS Token');
exports.DOT = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', 18, 'DOT', 'Polkadot Token');
exports.ETH = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x2170ed0880ac9a755fd29b2688956bd959f933f8', 18, 'ETH', 'Ethereum Token');
var WETH_ONLY = (_a = {},
    _a[sdk_1.ChainId.MAINNET] = [sdk_1.WETH[sdk_1.ChainId.MAINNET]],
    _a[sdk_1.ChainId.BSCTESTNET] = [sdk_1.WETH[sdk_1.ChainId.BSCTESTNET]],
    _a);
// used to construct intermediary pairs for trading
exports.BASES_TO_CHECK_TRADES_AGAINST = __assign(__assign({}, WETH_ONLY), (_b = {}, _b[sdk_1.ChainId.MAINNET] = __spreadArrays(WETH_ONLY[sdk_1.ChainId.MAINNET], [exports.DAI, exports.BUSD, exports.USDT, exports.EOS, exports.DOT]), _b));
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
exports.CUSTOM_BASES = (_c = {},
    _c[sdk_1.ChainId.MAINNET] = (_d = {},
        _d[exports.ETH.address] = [exports.DAI, sdk_1.WETH[sdk_1.ChainId.MAINNET]],
        _d),
    _c);
// used for display in the default list when adding liquidity
exports.SUGGESTED_BASES = __assign(__assign({}, WETH_ONLY), (_e = {}, _e[sdk_1.ChainId.MAINNET] = __spreadArrays(WETH_ONLY[sdk_1.ChainId.MAINNET], [exports.DAI, exports.BUSD, exports.USDT]), _e));
// used to construct the list of all pairs we consider by default in the frontend
exports.BASES_TO_TRACK_LIQUIDITY_FOR = __assign(__assign({}, WETH_ONLY), (_f = {}, _f[sdk_1.ChainId.MAINNET] = __spreadArrays(WETH_ONLY[sdk_1.ChainId.MAINNET], [exports.DAI, exports.BUSD, exports.USDT]), _f));
exports.PINNED_PAIRS = (_g = {},
    _g[sdk_1.ChainId.MAINNET] = [
        [
            new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 18, 'CAKE', 'PancakeSwap Token'),
            new sdk_1.Token(sdk_1.ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
        ],
        [exports.BUSD, exports.USDT],
        [exports.DAI, exports.USDT]
    ],
    _g);
exports.SUPPORTED_WALLETS = {
    BSC: {
        connector: connectors_1.bsc,
        name: 'Binance Chain Wallet',
        iconName: 'binance.svg',
        description: 'Easy-to-use browser extension.',
        href: null,
        color: '#E8831D'
    },
    INJECTED: {
        connector: connectors_1.injected,
        name: 'Injected',
        iconName: 'arrow-right.svg',
        description: 'Injected web3 provider.',
        href: null,
        color: '#010101',
        primary: true
    },
    METAMASK: {
        connector: connectors_1.injected,
        name: 'MetaMask',
        iconName: 'metamask.png',
        description: 'Easy-to-use browser extension.',
        href: null,
        color: '#E8831D'
    }
    // WALLET_CONNECT: {
    //   connector: walletconnect,
    //   name: 'WalletConnect',
    //   iconName: 'walletConnectIcon.svg',
    //   description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    //   href: null,
    //   color: '#4196FC',
    //   mobile: true
    // },
    // WALLET_LINK: {
    //   connector: walletlink,
    //   name: 'Coinbase Wallet',
    //   iconName: 'coinbaseWalletIcon.svg',
    //   description: 'Use Coinbase Wallet app on mobile device',
    //   href: null,
    //   color: '#315CF5'
    // },
    // COINBASE_LINK: {
    //   name: 'Open in Coinbase Wallet',
    //   iconName: 'coinbaseWalletIcon.svg',
    //   description: 'Open in Coinbase Wallet app.',
    //   href: 'https://go.cb-w.com/mtUDhEZPy1',
    //   color: '#315CF5',
    //   mobile: true,
    //   mobileOnly: true
    // },
    // FORTMATIC: {
    //   connector: fortmatic,
    //   name: 'Fortmatic',
    //   iconName: 'fortmaticIcon.png',
    //   description: 'Login using Fortmatic hosted wallet',
    //   href: null,
    //   color: '#6748FF',
    //   mobile: true
    // },
    // Portis: {
    //   connector: portis,
    //   name: 'Portis',
    //   iconName: 'portisIcon.png',
    //   description: 'Login using Portis hosted wallet',
    //   href: null,
    //   color: '#4A6C9B',
    //   mobile: true
    // }
};
exports.NetworkContextName = 'NETWORK';
// default allowed slippage, in bips
exports.INITIAL_ALLOWED_SLIPPAGE = 80;
// 20 minutes, denominated in seconds
exports.DEFAULT_DEADLINE_FROM_NOW = 60 * 20;
// one basis point
exports.ONE_BIPS = new sdk_1.Percent(sdk_1.JSBI.BigInt(1), sdk_1.JSBI.BigInt(10000));
exports.BIPS_BASE = sdk_1.JSBI.BigInt(10000);
// used for warning states
exports.ALLOWED_PRICE_IMPACT_LOW = new sdk_1.Percent(sdk_1.JSBI.BigInt(100), exports.BIPS_BASE); // 1%
exports.ALLOWED_PRICE_IMPACT_MEDIUM = new sdk_1.Percent(sdk_1.JSBI.BigInt(300), exports.BIPS_BASE); // 3%
exports.ALLOWED_PRICE_IMPACT_HIGH = new sdk_1.Percent(sdk_1.JSBI.BigInt(500), exports.BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
exports.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = new sdk_1.Percent(sdk_1.JSBI.BigInt(1000), exports.BIPS_BASE); // 10%
// for non expert mode disable swaps above this
exports.BLOCKED_PRICE_IMPACT_NON_EXPERT = new sdk_1.Percent(sdk_1.JSBI.BigInt(1500), exports.BIPS_BASE); // 15%
// used to ensure the user doesn't send so much ETH so they end up with <.01
exports.MIN_ETH = sdk_1.JSBI.exponentiate(sdk_1.JSBI.BigInt(10), sdk_1.JSBI.BigInt(16)); // .01 ETH
exports.BETTER_TRADE_LINK_THRESHOLD = new sdk_1.Percent(sdk_1.JSBI.BigInt(75), sdk_1.JSBI.BigInt(10000));
