import Datafeed from './datafeed';

declare global {
    interface Window {
        tvWidget:any;
        TradingView : any
    }
}

const {TradingView} = window;
window.tvWidget = new window.TradingView.Widget({
    symbol: 'Bitfinex:ETH/USD', // default symbol
    interval: '1D', // default interval
    fullscreen: true, // displays the chart in the fullscreen mode
    container: 'tv_chart_container',
    datafeed: Datafeed,
    library_path: '../charting_library_clonned_data/charting_library/',
});

// window.tvWidget =  TradingView.widget({
//     symbol: 'Bitfinex:ETH/USD', // default symbol
//     interval: '1D', // default interval
//     fullscreen: false, // displays the chart in the fullscreen mode
//     container: 'tv_chart_container',
//     datafeed: Datafeed,
//     library_path: '../../../../public/charting_library/charting_library.js',
// });

export default {}