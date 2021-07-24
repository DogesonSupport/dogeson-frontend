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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var sdk_1 = require("@pancakeswap-libs/sdk");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var uikit_1 = require("@pancakeswap-libs/uikit");
var styled_components_1 = require("styled-components");
var Page_1 = require("components/Layout/Page");
var AddressInputPanel_1 = require("components/AddressInputPanel");
var Card_1 = require("components/Card");
var Column_1 = require("components/Column");
var ConfirmSwapModal_1 = require("components/swap/ConfirmSwapModal");
var CurrencyInputPanel_1 = require("components/CurrencyInputPanel");
var CardNav_1 = require("components/CardNav");
var Row_1 = require("components/Row");
var AdvancedSwapDetailsDropdown_1 = require("components/swap/AdvancedSwapDetailsDropdown");
var BetterTradeLink_1 = require("components/swap/BetterTradeLink");
var confirmPriceImpactWithoutFee_1 = require("components/swap/confirmPriceImpactWithoutFee");
var styleds_1 = require("components/swap/styleds");
var TradePrice_1 = require("components/swap/TradePrice");
var TokenWarningModal_1 = require("components/TokenWarningModal");
var SyrupWarningModal_1 = require("components/SyrupWarningModal");
var ProgressSteps_1 = require("components/ProgressSteps");
var react_tradingview_widget_1 = require("react-tradingview-widget");
var index_1 = require("constants/index");
var V1_1 = require("data/V1");
var hooks_1 = require("hooks");
var Tokens_1 = require("hooks/Tokens");
var useApproveCallback_1 = require("hooks/useApproveCallback");
var useSwapCallback_1 = require("hooks/useSwapCallback");
var useToggledVersion_1 = require("hooks/useToggledVersion");
var useWrapCallback_1 = require("hooks/useWrapCallback");
var actions_1 = require("state/swap/actions");
var hooks_2 = require("state/swap/hooks");
var hooks_3 = require("state/user/hooks");
var Shared_1 = require("components/Shared");
var maxAmountSpend_1 = require("utils/maxAmountSpend");
var prices_1 = require("utils/prices");
var Loader_1 = require("components/Loader");
var translateTextHelpers_1 = require("utils/translateTextHelpers");
var request_1 = require("utils/request");
var PageHeader_1 = require("components/PageHeader");
var ConnectWalletButton_1 = require("components/ConnectWalletButton");
var AppBody_1 = require("../AppBody");
var HotTokenBar_1 = require("./components/HotTokenBar");
var Layout_1 = require("./components/Layout");
var CoinStatsBoard_1 = require("./components/CoinStatsBoard");
var TokenInfo_1 = require("./components/TokenInfo");
var TransactionCard_1 = require("./components/TransactionCard");
var ContractPanel_1 = require("./components/ContractPanel");
var Main = Shared_1.TYPE.main;
var Swap = function () {
    var _a, _b, _c, _d;
    var _e, _f, _g, _h, _j, _k, _l;
    var loadedUrlParams = hooks_2.useDefaultsFromURLSearch();
    // token warning stuff
    var _m = [
        Tokens_1.useCurrency(loadedUrlParams === null || loadedUrlParams === void 0 ? void 0 : loadedUrlParams.inputCurrencyId),
        Tokens_1.useCurrency(loadedUrlParams === null || loadedUrlParams === void 0 ? void 0 : loadedUrlParams.outputCurrencyId),
    ], loadedInputCurrency = _m[0], loadedOutputCurrency = _m[1];
    var _o = react_1.useState(false), dismissTokenWarning = _o[0], setDismissTokenWarning = _o[1];
    var _p = react_1.useState(false), isSyrup = _p[0], setIsSyrup = _p[1];
    var _q = react_1.useState(''), syrupTransactionType = _q[0], setSyrupTransactionType = _q[1];
    var urlLoadedTokens = react_1.useMemo(function () { var _a, _b; return (_b = (_a = [loadedInputCurrency, loadedOutputCurrency]) === null || _a === void 0 ? void 0 : _a.filter(function (c) { return c instanceof sdk_1.Token; })) !== null && _b !== void 0 ? _b : []; }, [loadedInputCurrency, loadedOutputCurrency]);
    var handleConfirmTokenWarning = react_1.useCallback(function () {
        setDismissTokenWarning(true);
    }, []);
    var handleConfirmSyrupWarning = react_1.useCallback(function () {
        setIsSyrup(false);
        setSyrupTransactionType('');
    }, []);
    var account = hooks_1.useActiveWeb3React().account;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var isExpertMode = hooks_3.useExpertModeManager()[0];
    // get custom setting values for user
    var deadline = hooks_3.useUserDeadline()[0];
    var allowedSlippage = hooks_3.useUserSlippageTolerance()[0];
    // swap state
    var _r = hooks_2.useSwapState(), independentField = _r.independentField, typedValue = _r.typedValue, recipient = _r.recipient;
    var _s = hooks_2.useDerivedSwapInfo(), v1Trade = _s.v1Trade, v2Trade = _s.v2Trade, currencyBalances = _s.currencyBalances, parsedAmount = _s.parsedAmount, currencies = _s.currencies, swapInputError = _s.inputError;
    var _t = useWrapCallback_1["default"](currencies[actions_1.Field.INPUT], currencies[actions_1.Field.OUTPUT], typedValue), wrapType = _t.wrapType, onWrap = _t.execute, wrapInputError = _t.inputError;
    var showWrap = wrapType !== useWrapCallback_1.WrapType.NOT_APPLICABLE;
    //   const { address: recipientAddress } = useENSAddress(recipient)
    var toggledVersion = useToggledVersion_1["default"]();
    var trade = showWrap
        ? undefined
        : (_a = {},
            _a[useToggledVersion_1.Version.v1] = v1Trade,
            _a[useToggledVersion_1.Version.v2] = v2Trade,
            _a)[toggledVersion];
    var betterTradeLinkVersion = toggledVersion === useToggledVersion_1.Version.v2 && V1_1.isTradeBetter(v2Trade, v1Trade, index_1.BETTER_TRADE_LINK_THRESHOLD)
        ? useToggledVersion_1.Version.v1
        : toggledVersion === useToggledVersion_1.Version.v1 && V1_1.isTradeBetter(v1Trade, v2Trade)
            ? useToggledVersion_1.Version.v2
            : undefined;
    var parsedAmounts = showWrap
        ? (_b = {},
            _b[actions_1.Field.INPUT] = parsedAmount,
            _b[actions_1.Field.OUTPUT] = parsedAmount,
            _b) : (_c = {},
        _c[actions_1.Field.INPUT] = independentField === actions_1.Field.INPUT ? parsedAmount : trade === null || trade === void 0 ? void 0 : trade.inputAmount,
        _c[actions_1.Field.OUTPUT] = independentField === actions_1.Field.OUTPUT ? parsedAmount : trade === null || trade === void 0 ? void 0 : trade.outputAmount,
        _c);
    var _u = hooks_2.useSwapActionHandlers(), onSwitchTokens = _u.onSwitchTokens, onCurrencySelection = _u.onCurrencySelection, onUserInput = _u.onUserInput, onChangeRecipient = _u.onChangeRecipient;
    var isValid = !swapInputError;
    var dependentField = independentField === actions_1.Field.INPUT ? actions_1.Field.OUTPUT : actions_1.Field.INPUT;
    var handleTypeInput = react_1.useCallback(function (value) {
        onUserInput(actions_1.Field.INPUT, value);
    }, [onUserInput]);
    var handleTypeOutput = react_1.useCallback(function (value) {
        onUserInput(actions_1.Field.OUTPUT, value);
    }, [onUserInput]);
    // modal and loading
    var _v = react_1.useState({
        showConfirm: false,
        tradeToConfirm: undefined,
        attemptingTxn: false,
        swapErrorMessage: undefined,
        txHash: undefined
    }), _w = _v[0], showConfirm = _w.showConfirm, tradeToConfirm = _w.tradeToConfirm, swapErrorMessage = _w.swapErrorMessage, attemptingTxn = _w.attemptingTxn, txHash = _w.txHash, setSwapState = _v[1];
    var formattedAmounts = (_d = {},
        _d[independentField] = typedValue,
        _d[dependentField] = showWrap
            ? (_f = (_e = parsedAmounts[independentField]) === null || _e === void 0 ? void 0 : _e.toExact()) !== null && _f !== void 0 ? _f : '' : (_h = (_g = parsedAmounts[dependentField]) === null || _g === void 0 ? void 0 : _g.toSignificant(6)) !== null && _h !== void 0 ? _h : '',
        _d);
    var route = trade === null || trade === void 0 ? void 0 : trade.route;
    var userHasSpecifiedInputOutput = Boolean(currencies[actions_1.Field.INPUT] && currencies[actions_1.Field.OUTPUT] && ((_j = parsedAmounts[independentField]) === null || _j === void 0 ? void 0 : _j.greaterThan(sdk_1.JSBI.BigInt(0))));
    var noRoute = !route;
    // check whether the user has approved the router on the input token
    var _x = useApproveCallback_1.useApproveCallbackFromTrade(trade, allowedSlippage), approval = _x[0], approveCallback = _x[1];
    // check if user has gone through approval process, used to show two step buttons, reset on token change
    var _y = react_1.useState(false), approvalSubmitted = _y[0], setApprovalSubmitted = _y[1];
    // mark when a user has submitted an approval, reset onTokenSelection for input field
    react_1.useEffect(function () {
        if (approval === useApproveCallback_1.ApprovalState.PENDING) {
            setApprovalSubmitted(true);
        }
    }, [approval, approvalSubmitted]);
    var maxAmountInput = maxAmountSpend_1.maxAmountSpend(currencyBalances[actions_1.Field.INPUT]);
    var atMaxAmountInput = Boolean(maxAmountInput && ((_k = parsedAmounts[actions_1.Field.INPUT]) === null || _k === void 0 ? void 0 : _k.equalTo(maxAmountInput)));
    // the callback to execute the swap
    var _z = useSwapCallback_1.useSwapCallback(trade, allowedSlippage, deadline, recipient), swapCallback = _z.callback, swapCallbackError = _z.error;
    var priceImpactWithoutFee = prices_1.computeTradePriceBreakdown(trade).priceImpactWithoutFee;
    var handleSwap = react_1.useCallback(function () {
        if (priceImpactWithoutFee && !confirmPriceImpactWithoutFee_1["default"](priceImpactWithoutFee)) {
            return;
        }
        if (!swapCallback) {
            return;
        }
        setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { attemptingTxn: true, swapErrorMessage: undefined, txHash: undefined })); });
        swapCallback()
            .then(function (hash) {
            setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { attemptingTxn: false, swapErrorMessage: undefined, txHash: hash })); });
        })["catch"](function (error) {
            setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { attemptingTxn: false, swapErrorMessage: error.message, txHash: undefined })); });
        });
    }, [priceImpactWithoutFee, swapCallback, setSwapState]);
    // errors
    var _0 = react_1.useState(false), showInverted = _0[0], setShowInverted = _0[1];
    // warnings on slippage
    var priceImpactSeverity = prices_1.warningSeverity(priceImpactWithoutFee);
    // show approve flow when: no error on inputs, not approved or pending, or approved in current session
    // never show if price impact is above threshold in non expert mode
    var showApproveFlow = !swapInputError &&
        (approval === useApproveCallback_1.ApprovalState.NOT_APPROVED ||
            approval === useApproveCallback_1.ApprovalState.PENDING ||
            (approvalSubmitted && approval === useApproveCallback_1.ApprovalState.APPROVED)) &&
        !(priceImpactSeverity > 3 && !isExpertMode);
    var handleConfirmDismiss = react_1.useCallback(function () {
        setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { showConfirm: false })); });
        // if there was a tx hash, we want to clear the input
        if (txHash) {
            onUserInput(actions_1.Field.INPUT, '');
        }
    }, [onUserInput, txHash, setSwapState]);
    var handleAcceptChanges = react_1.useCallback(function () {
        setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { tradeToConfirm: trade })); });
    }, [trade]);
    // This will check to see if the user has selected Syrup to either buy or sell.
    // If so, they will be alerted with a warning message.
    var checkForSyrup = react_1.useCallback(function (selected, purchaseType) {
        if (selected === 'syrup') {
            setIsSyrup(true);
            setSyrupTransactionType(purchaseType);
        }
    }, [setIsSyrup, setSyrupTransactionType]);
    var handleInputSelect = react_1.useCallback(function (inputCurrency) {
        setApprovalSubmitted(false); // reset 2 step UI for approvals
        onCurrencySelection(actions_1.Field.INPUT, inputCurrency);
        if (inputCurrency.symbol.toLowerCase() === 'syrup') {
            checkForSyrup(inputCurrency.symbol.toLowerCase(), 'Selling');
        }
    }, [onCurrencySelection, setApprovalSubmitted, checkForSyrup]);
    var handleMaxInput = react_1.useCallback(function () {
        if (maxAmountInput) {
            onUserInput(actions_1.Field.INPUT, maxAmountInput.toExact());
        }
    }, [maxAmountInput, onUserInput]);
    var handleOutputSelect = react_1.useCallback(function (outputCurrency) {
        onCurrencySelection(actions_1.Field.OUTPUT, outputCurrency);
        if (outputCurrency.symbol.toLowerCase() === 'syrup') {
            checkForSyrup(outputCurrency.symbol.toLowerCase(), 'Buying');
        }
    }, [onCurrencySelection, checkForSyrup]);
    var _1 = react_1.useState(null), currentToken = _1[0], setCurrentToken = _1[1];
    var _2 = react_1.useState(null), hotTokens = _2[0], setHotTokens = _2[1];
    // const [historicalData, setHistoricalData = useState<HistoricalDataProps[] | null>(null)
    react_1.useEffect(function () {
        var init = function () { return __awaiter(void 0, void 0, void 0, function () {
            var tokens, tokenInfo;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, request_1.getHotTokens()];
                    case 1:
                        tokens = _b.sent();
                        setHotTokens(tokens.data.tokens);
                        console.log(tokens.data.tokens);
                        return [4 /*yield*/, request_1.getTokenInfo(tokens.data.tokens[3].dexId)];
                    case 2:
                        tokenInfo = _b.sent();
                        setCurrentToken((_a = tokenInfo.data.token) !== null && _a !== void 0 ? _a : null);
                        return [2 /*return*/];
                }
            });
        }); };
        init();
    }, []);
    return (react_1["default"].createElement(Page_1["default"], null,
        react_1["default"].createElement(TokenWarningModal_1["default"], { isOpen: urlLoadedTokens.length > 0 && !dismissTokenWarning, tokens: urlLoadedTokens, onConfirm: handleConfirmTokenWarning }),
        react_1["default"].createElement(SyrupWarningModal_1["default"], { isOpen: isSyrup, transactionType: syrupTransactionType, onConfirm: handleConfirmSyrupWarning }),
        react_1["default"].createElement(HotTokenBar_1["default"], { tokens: hotTokens }),
        react_1["default"].createElement(Layout_1.Cards, null,
            react_1["default"].createElement(Layout_1.LeftTopCard, null,
                react_1["default"].createElement(CardNav_1["default"], null),
                react_1["default"].createElement(AppBody_1["default"], null,
                    react_1["default"].createElement(styleds_1.Wrapper, { id: "swap-page" },
                        react_1["default"].createElement(ConfirmSwapModal_1["default"], { isOpen: showConfirm, trade: trade, originalTrade: tradeToConfirm, onAcceptChanges: handleAcceptChanges, attemptingTxn: attemptingTxn, txHash: txHash, recipient: recipient, allowedSlippage: allowedSlippage, onConfirm: handleSwap, swapErrorMessage: swapErrorMessage, onDismiss: handleConfirmDismiss }),
                        react_1["default"].createElement(PageHeader_1["default"], { title: "Exchange", description: "" }),
                        react_1["default"].createElement(uikit_1.CardBody, null,
                            react_1["default"].createElement(Column_1.AutoColumn, { gap: "md" },
                                react_1["default"].createElement(CurrencyInputPanel_1["default"], { label: independentField === actions_1.Field.OUTPUT && !showWrap && trade
                                        ? 'From (estimated)'
                                        : translateTextHelpers_1.TranslateString(76, 'From'), value: formattedAmounts[actions_1.Field.INPUT], showMaxButton: !atMaxAmountInput, currency: currencies[actions_1.Field.INPUT], onUserInput: handleTypeInput, onMax: handleMaxInput, onCurrencySelect: handleInputSelect, otherCurrency: currencies[actions_1.Field.OUTPUT], id: "swap-currency-input" }),
                                react_1["default"].createElement(Column_1.AutoColumn, { justify: "space-between" },
                                    react_1["default"].createElement(Row_1.AutoRow, { justify: isExpertMode ? 'space-between' : 'center', style: { padding: '0 1rem' } },
                                        react_1["default"].createElement(styleds_1.ArrowWrapper, { clickable: true },
                                            react_1["default"].createElement(uikit_1.IconButton, { variant: "tertiary", onClick: function () {
                                                    setApprovalSubmitted(false); // reset 2 step UI for approvals
                                                    onSwitchTokens();
                                                }, style: { borderRadius: '50%' }, size: "sm" },
                                                react_1["default"].createElement(uikit_1.ArrowDownIcon, { color: "primary", width: "24px" }))),
                                        recipient === null && !showWrap && isExpertMode ? (react_1["default"].createElement(Shared_1.LinkStyledButton, { id: "add-recipient-button", onClick: function () { return onChangeRecipient(''); } }, "+ Add a send (optional)")) : null)),
                                react_1["default"].createElement(CurrencyInputPanel_1["default"], { value: formattedAmounts[actions_1.Field.OUTPUT], onUserInput: handleTypeOutput, label: independentField === actions_1.Field.INPUT && !showWrap && trade ? 'To (estimated)' : translateTextHelpers_1.TranslateString(80, 'To'), showMaxButton: false, currency: currencies[actions_1.Field.OUTPUT], onCurrencySelect: handleOutputSelect, otherCurrency: currencies[actions_1.Field.INPUT], id: "swap-currency-output" }),
                                recipient !== null && !showWrap ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement(Row_1.AutoRow, { justify: "space-between", style: { padding: '0 1rem' } },
                                        react_1["default"].createElement(styleds_1.ArrowWrapper, { clickable: false },
                                            react_1["default"].createElement(react_feather_1.ArrowDown, { size: "16", color: theme.colors.textSubtle })),
                                        react_1["default"].createElement(Shared_1.LinkStyledButton, { id: "remove-recipient-button", onClick: function () { return onChangeRecipient(null); } }, "- Remove send")),
                                    react_1["default"].createElement(AddressInputPanel_1["default"], { id: "recipient", value: recipient, onChange: onChangeRecipient }))) : null,
                                showWrap ? null : (react_1["default"].createElement(Card_1["default"], { padding: ".25rem .75rem 0 .75rem", borderRadius: "20px" },
                                    react_1["default"].createElement(Column_1.AutoColumn, { gap: "4px" },
                                        Boolean(trade) && (react_1["default"].createElement(Row_1.RowBetween, { align: "center" },
                                            react_1["default"].createElement(uikit_1.Text, { fontSize: "14px" }, "Price"),
                                            react_1["default"].createElement(TradePrice_1["default"], { price: trade === null || trade === void 0 ? void 0 : trade.executionPrice, showInverted: showInverted, setShowInverted: setShowInverted }))),
                                        allowedSlippage !== index_1.INITIAL_ALLOWED_SLIPPAGE && (react_1["default"].createElement(Row_1.RowBetween, { align: "center" },
                                            react_1["default"].createElement(uikit_1.Text, { fontSize: "14px" }, "Slippage Tolerance"),
                                            react_1["default"].createElement(uikit_1.Text, { fontSize: "14px" },
                                                allowedSlippage / 100,
                                                "%"))))))),
                            react_1["default"].createElement(styleds_1.BottomGrouping, null,
                                !account ? (react_1["default"].createElement(ConnectWalletButton_1["default"], { fullWidth: true })) : showWrap ? (react_1["default"].createElement(uikit_1.Button, { disabled: Boolean(wrapInputError), onClick: onWrap, fullWidth: true }, wrapInputError !== null && wrapInputError !== void 0 ? wrapInputError : (wrapType === useWrapCallback_1.WrapType.WRAP ? 'Wrap' : wrapType === useWrapCallback_1.WrapType.UNWRAP ? 'Unwrap' : null))) : noRoute && userHasSpecifiedInputOutput ? (react_1["default"].createElement(Card_1.GreyCard, { style: { textAlign: 'center' } },
                                    react_1["default"].createElement(Main, { mb: "4px" }, "Insufficient liquidity for this trade."))) : showApproveFlow ? (react_1["default"].createElement(Row_1.RowBetween, null,
                                    react_1["default"].createElement(uikit_1.Button, { onClick: approveCallback, disabled: approval !== useApproveCallback_1.ApprovalState.NOT_APPROVED || approvalSubmitted, style: { width: '48%' }, variant: approval === useApproveCallback_1.ApprovalState.APPROVED ? 'success' : 'primary' }, approval === useApproveCallback_1.ApprovalState.PENDING ? (react_1["default"].createElement(Row_1.AutoRow, { gap: "6px", justify: "center" },
                                        "Approving ",
                                        react_1["default"].createElement(Loader_1["default"], { stroke: "white" }))) : approvalSubmitted && approval === useApproveCallback_1.ApprovalState.APPROVED ? ('Approved') : ("Approve " + ((_l = currencies[actions_1.Field.INPUT]) === null || _l === void 0 ? void 0 : _l.symbol))),
                                    react_1["default"].createElement(uikit_1.Button, { onClick: function () {
                                            if (isExpertMode) {
                                                handleSwap();
                                            }
                                            else {
                                                setSwapState({
                                                    tradeToConfirm: trade,
                                                    attemptingTxn: false,
                                                    swapErrorMessage: undefined,
                                                    showConfirm: true,
                                                    txHash: undefined
                                                });
                                            }
                                        }, style: { width: '48%' }, id: "swap-button", disabled: !isValid || approval !== useApproveCallback_1.ApprovalState.APPROVED || (priceImpactSeverity > 3 && !isExpertMode), variant: isValid && priceImpactSeverity > 2 ? 'danger' : 'primary' }, priceImpactSeverity > 3 && !isExpertMode
                                        ? "Price Impact High"
                                        : "Swap" + (priceImpactSeverity > 2 ? ' Anyway' : '')))) : (react_1["default"].createElement(uikit_1.Button, { onClick: function () {
                                        if (isExpertMode) {
                                            handleSwap();
                                        }
                                        else {
                                            setSwapState({
                                                tradeToConfirm: trade,
                                                attemptingTxn: false,
                                                swapErrorMessage: undefined,
                                                showConfirm: true,
                                                txHash: undefined
                                            });
                                        }
                                    }, id: "swap-button", disabled: !isValid || (priceImpactSeverity > 3 && !isExpertMode) || !!swapCallbackError, variant: isValid && priceImpactSeverity > 2 && !swapCallbackError ? 'danger' : 'primary', fullWidth: true }, swapInputError ||
                                    (priceImpactSeverity > 3 && !isExpertMode
                                        ? "Price Impact Too High"
                                        : "Swap" + (priceImpactSeverity > 2 ? ' Anyway' : '')))),
                                showApproveFlow && react_1["default"].createElement(ProgressSteps_1["default"], { steps: [approval === useApproveCallback_1.ApprovalState.APPROVED] }),
                                isExpertMode && swapErrorMessage ? react_1["default"].createElement(styleds_1.SwapCallbackError, { error: swapErrorMessage }) : null,
                                betterTradeLinkVersion && react_1["default"].createElement(BetterTradeLink_1["default"], { version: betterTradeLinkVersion }))))),
                react_1["default"].createElement(AdvancedSwapDetailsDropdown_1["default"], { trade: trade })),
            react_1["default"].createElement(Layout_1.RightTopCard, null,
                react_1["default"].createElement(Column_1.FullHeightColumn, null,
                    react_1["default"].createElement(ContractPanel_1["default"], { token: currentToken }),
                    react_1["default"].createElement(CoinStatsBoard_1["default"], { tokenInfo: currentToken }),
                    react_1["default"].createElement(react_tradingview_widget_1["default"], { symbol: "NASDAQ:AAPL", theme: react_tradingview_widget_1.Themes.DARK, locale: "en", autosize: true }))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(TokenInfo_1["default"], { tokenInfo: currentToken })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(TransactionCard_1["default"], { tokenName: "Bitcoin", contract: "0x740845bab477C80fE55274A707b66Ab65a919aE5" })))));
};
exports["default"] = Swap;
