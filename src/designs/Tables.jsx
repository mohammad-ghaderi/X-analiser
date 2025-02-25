
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


export const FUNDAMENTAL_ANALYSIS = {
    header : [
        {content: 'General Data'},
        {content: 'Currency', class:'second-layer'},
        {content: '', colSpan:'2'},
        {content: 'USD'}
    ],
    body: [
        [
            {content: 'Lagging Indicators', rowSpan:'13', class:'upside-down'},
            {content: 'Interest rate', class:'second-layer'},
            {content: '', colSpan:'2'},
            {content: ''},

        ],
        [
            {content:'GDP',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'Capital Flow',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'Stock Market',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'Balance of trade (BOT)',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'CPI',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'PPI',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'PCE',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'NFP',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'Unemployment Rate',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'Retail Sales',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'Monetary Policy',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content:'Financial Policy',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'', }
        ],
        [
            {content: 'Coincident Indicators', rowSpan:'5', class:'upside-down'},
            {content:'GDP Growth Rate',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content:'CPI',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content:'PPI',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content:'Unemployment Rate',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content:'Retail Sales',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content: 'Leading Indicators', rowSpan:'6', class:'upside-down'},
            {content:'PMI',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content:'CCI',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content:'ISM',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content:'Unemployment Claims',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content:'Crude Oil Stock',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content:'Natural Gas Stock',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content: 'Result & Summary Section Part', class:'upside-down'},
            {content:'Additional Note',  class:'second-layer'},
            {content:'', colSpan:'2'},
            {content:'' }
        ],
        [
            {content: 'News', rowSpan:'8', class:'upside-down'},
            {content:'Time',  class:'second-layer'},
            {content: 'Impact'},
            {content: 'Description'},
            {content: 'Result'},
        ],
        [
            {content:'',  class:'second-layer'},
            {content:'' },
            {content:'' },
            {content:'' },
        ],
        [
            {content:'',  class:'second-layer'},
            {content:'' },
            {content:'' },
            {content:'' },
        ],
        [
            {content:'',  class:'second-layer'},
            {content:'' },
            {content:'' },
            {content:'' },
        ],
        [
            {content:'',  class:'second-layer'},
            {content:'' },
            {content:'' },
            {content:'' },
        ],
        [
            {content:'',  class:'second-layer'},
            {content:'' },
            {content:'' },
            {content:'' },
        ],
        [
            {content:'',  class:'second-layer'},
            {content:'' },
            {content:'' },
            {content:'' },
        ],
        [
            {content:'Additional Note',  class:'second-layer'},
            {content:'', colSpan:'3' },
        ],
        [
            {content: 'Result & Summary Section Part', class:'upside-down'},
            {content:'Final Analysis',  class:'second-layer'},
            {content:''},
            {content:'', colSpan:'3'}
        ],
    ]
}