
export const TECHNICAL_ANALYSIS = {
    class: 'technical-analysis-table',
    header: [
        [
            {content: 'Duration'},
            {colSpan: '2', content: 'Long'},
            {colSpan: '2', content: 'Main'},
            {colSpan: '2', content: 'Short'},
        ], 
        [
            {content: 'Time Frame'}, 
            {content: '1W', style:{width: '50px'}}, 
            {content: '1D', style:{width: '50px'}}, 
            {content: '4H', style:{width: '50px'}}, 
            {content: '2H', style:{width: '50px'}}, 
            {content: '1H', style:{width: '50px'}}, 
            {content: '30M', style:{width: '50px'}},   
        ],
    ],
    body: [
        {content: 'Order Block', count: 6},
        {content: 'Support & Resistance', count: 6},
        {content: 'Trend Line & TrendChannel', count: 6},
        {content: 'Candle Stick', count: 6},
        {content: 'Fibonacci Resistance', count: 6},
        {content: 'Fibonacci Extension', count: 6},
        {content: 'Moving Average Simple (5,10)', count: 6},
        {content: 'Moving Average Simple (10,20)', count: 6},
        {content: 'Moving Average Exponential (5,10)', count: 6},
        {content: 'Moving Average Exponential (10,20)', count: 6},
        {content: 'Golden Zone SMA', count: 6},
        {content: 'Cross Over SMA', count: 6},
        {content: 'GMMA', count: 6},
        {content: 'Bolinger Band', count: 6},
        {content: 'Keltner Channel', count: 6},
        {content: 'Moving Average Convergence Divergence (MACD)', count: 6},
        {content: 'Liquidity Heatmap', count: 6},
        {content: 'Parabolic SAR', count: 6},
        {content: 'Stochastic', count: 6},
        {content: 'Relative Strength Index (RSI)', count: 6},
        {content: 'Stochastic RSI', count: 6},
        {content: 'Average Directional Index (ADX)', count: 6},
        {content: 'The Echo Forecast', count: 6},
        {content: 'Ichimoko', count: 6},
        {content: 'Price Action Pattern', count: 6},
        {content: 'Pivot Point (PP)', count: 6},
        {content: 'OBV - On-Balance Volume', count: 6},
        {content: 'Money Flow Index (MFI)', count: 6},
        {content: 'AD', count: 6},
        {content: 'Rate of Change (ROC)', count: 6},
        {content: 'Pitchfork', count: 6},
        {content: 'GANN', count: 6},
        {content: 'ELLIOTT', count: 6},
        {content: 'DOW', count: 6},
        {content: 'Harmonic patterns', count: 6},
    ],
    footer: [
        {label: 'Long (BUY)', count: 6},
        {label: 'Range', count: 6},
        {label: 'Short (SELL)', count: 6},
        {label: 'Final Analys', count: 6}
    ]
}


export const FUNDAMENTAL_ANALYSIS_TYPE1 = {
    body: [
        [
            {content:'Lagging Indicators', rowSpan:'13', class:'upside-down'},
            {content:'Interest rate', class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}

        ],
        [
            {content:'GDP Growth Rate',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Stock Market',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Current Account',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Balance of trade (BOT)',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'CPI',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'PPI',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'PCE',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'NFP',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Unemployment Rate',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Retail Sales',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Monetary Policy',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Financial Policy',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content: 'Coincident Indicators', rowSpan:'5', class:'upside-down'},
            {content:'GDP Growth Rate',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'CPI',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'PPI',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Unemployment Rate',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Retail Sales',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content: 'Leading Indicators', rowSpan:'6', class:'upside-down'},
            {content:'PMI',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'CCI',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'ISM',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Unemployment Claims',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Crude Oil Stock',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Natural Gas Stock',  class:'second-layer p-0'},
            {content:'', colSpan:'2', type: 'inp', class: 'p-0'},
            {content:'', type: 'cmp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0'}
        ],
        [
            {content: 'Result & Summary Section Part', class:'upside-down'},
            {content:'Additional Note',  class:'second-layer p-0'},
            {content:'', colSpan:'3', type: 'inp-textarea', class: 'p-0', style: {position: 'relative'}},
            {content:'' , type: 'inp-textarea', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content: 'News', rowSpan:'8', class:'upside-down'},
            {content:'Time',  class:'second-layer p-0'},
            {content: 'Impact', style: {width: '80px'}},
            {content: 'Description', style: {width: '100px'}, colSpan: '2'},
            {content: 'Result', style: {width: '130px'}},
        ],
        [
            {content:'',  class:'second-layer p-0', type: 'inp', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'', colSpan: '2' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'',  class:'second-layer p-0', type: 'inp', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'', colSpan: '2' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'',  class:'second-layer p-0', type: 'inp', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'', colSpan: '2' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'',  class:'second-layer p-0', type: 'inp', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'', colSpan: '2' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'',  class:'second-layer p-0', type: 'inp', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'', colSpan: '2' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'',  class:'second-layer p-0', type: 'inp', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'', colSpan: '2' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'Additional Note',  class:'second-layer p-0 py-4'},
            {content:'', colSpan:'4' , type: 'inp-textarea', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content: 'Result & Summary Section Part', class:'upside-down'},
            {content:'Final Analysis',  class:'second-layer p-0'},
            {content:'', type: 'inp-textarea', class: 'p-0', style: {position: 'relative'}},
            {content:'', colSpan:'4', type: 'inp-textarea', class: 'p-0', style: {position: 'relative'}},
        ],
    ]
}



export const FUNDAMENTAL_ANALYSIS_TYPE2 = {
    body: [
        [
            {content:'Macroeconomics indicators ', rowSpan:'13', class:'upside-down'},
            {content:'Interest rate', class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}

        ],
        [
            {content:'GDP',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Capital Flow',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Stock Market',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Balance of trade (BOT)',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'CPI',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'PPI',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'PCE',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'NFP',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Unemployment Rate',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Retail Sales',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Monetary Policy',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content:'Financial Policy',  class:'second-layer p-1 py-2'},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '1', type: 'cmp', class: 'p-0', style:{position: 'relative', width: '30px'}},
            {content:'', colSpan: '4', type: 'inp', class: 'p-0'}
        ],
        [
            {content: 'Companies', rowSpan:'13', class:'upside-down'},
            {content:'Name',  class:'second-layer p-1 py-2'},
            {content:'PM'},
            {content:'ROA'},
            {content:'P/B'},
            {content:'P/E', colSpan: '2'},
            {content:'CFS'},
            {content:'BS'},
            {content:'IS'},
            {content:'Price Change'},
        ],
        [
            {content:'Goldman Sachs Group, Inc',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0', style:{position: 'relative'}},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0', style:{position: 'relative'}},
            {content:'', type: 'inp', class: 'p-0', style:{position: 'relative'}},
        ],
        [
            {content:'UnitedHealth Group Inc',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'Microsoft Corporation',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'Home Depot, Inc',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'Visa Inc',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'PMI',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'Caterpillar Inc',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'Salesforce Inc',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'McDonald\'s Corp',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'American Express Co',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'JPMorgan Chase & Co',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content:'Goldman Sachs Group, Inc',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', colSpan: '2', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
            {content:'', type: 'inp', class: 'p-0'},
        ],
        [
            {content: 'Result & Summary Section Part', class:'upside-down'},
            {content:'Additional Note',  class:'second-layer p-1 py-2'},
            {content:'', colSpan:'9', type: 'inp-textarea', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content: 'News', rowSpan:'8', class:'upside-down'},
            {content:'Time',  class:'second-layer p-1 py-2'},
            {content: 'Impact', colSpan: '2', style: {width: '80px'}},
            {content: 'Description', colSpan: '3', style: {width: '100px'}},
            {content: 'Result', colSpan: '4', style: {width: '130px'}},
        ],
        [
            {content:'' , class:'second-layer p-1 py-2', type: 'inp', style: {position: 'relative'}},
            {content:'' , colSpan: '2', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '3', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '4', type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'' , class:'second-layer p-1 py-2', type: 'inp', style: {position: 'relative'}},
            {content:'' , colSpan: '2', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '3', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '4', type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'' , class:'second-layer p-1 py-2', type: 'inp', style: {position: 'relative'}},
            {content:'' , colSpan: '2', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '3', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '4', type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'' , class:'second-layer p-1 py-2', type: 'inp', style: {position: 'relative'}},
            {content:'' , colSpan: '2', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '3', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '4', type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'' , class:'second-layer p-1 py-2', type: 'inp', style: {position: 'relative'}},
            {content:'' , colSpan: '2', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '3', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '4', type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'' , class:'second-layer p-1 py-2', type: 'inp', style: {position: 'relative'}},
            {content:'' , colSpan: '2', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '3', type: 'inp', class: 'p-0', style: {position: 'relative'}},
            {content:'' , colSpan: '4', type: 'inp', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content:'Additional Note',  class:'second-layer p-1 py-4'},
            {content:'', colSpan:'9' , type: 'inp-textarea', class: 'p-0', style: {position: 'relative'}},
        ],
        [
            {content: 'Result & Summary Section Part', class:'upside-down'},
            {content:'Final Analysis',  class:'second-layer p-1 py-2'},
            {content:'', type: 'inp-textarea', class: 'p-0', style: {position: 'relative'}},
            {content:'', colSpan:'8', type: 'inp-textarea', class: 'p-0', style: {position: 'relative'}},
        ],
    ]
}



export const SENTIMENT_ANALYSIS = {
    class: 'technical-analysis-table sentiment-analysis',

    header: [
        [
            {content: 'x'},
            {content: 'y'},
        ]
    ],
    body: [
        {content: 'Liquidity Trend', count: 1},
        {content: 'Stop Hunt', count: 1},
        {content: 'Fear and Greed Index', count: 1},
        {content: 'Volatility Index )VIX)', count: 1},
        {content: 'Put to Call Ratio (PCR)', count: 1},
        {content: 'Economic Optimism', count: 1},
        {content: 'VCV', count: 1},
        {content: 'COT', count: 1},
        {content: 'Sentiment Trader', count: 1},
        {content: 'Stock Twits', count: 1},
        {content: 'AAII', count: 1},
        {content: 'Herd behavior', count: 1},
        {content: 'Emotional stages of the market', count: 1},
        {content: 'GOOGLE TRENDS', count: 1},
        {content: 'General Sens', count: 1},
    ],
    footer: []
}
