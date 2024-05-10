
// --------------------------------------------------------------------------------------
// Default colors for line graphs
// --------------------------------------------------------------------------------------

export const defaultColors = [

    { 'color': '#3e95cd', 'fill': 'rgba(151,187,205,0.15)' },
    { 'color': '#95cd3e', 'fill': 'rgba(187,205,151,0.15)' },
    { 'color': '#cd3e3e', 'fill': 'rgba(205,151,151,0.15)' },
    { 'color': '#3ecd95', 'fill': 'rgba(151,205,187,0.15)' },
    { 'color': '#cd953e', 'fill': 'rgba(205,187,151,0.15)' },

    { 'color': '#953ecd', 'fill': 'rgba(187,151,205,0.15)' },
    { 'color': '#175ec8', 'fill': 'rgba(151,187,205,0.15)' },
    { 'color': '#ff7f00', 'fill': 'rgba(225,179,133,0.15)' },
    { 'color': '#cd3e95', 'fill': 'rgba(205,151,187,0.15)' },

];


// --------------------------------------------------------------------------------------
// Predefined state colors for timeline history
// --------------------------------------------------------------------------------------

export const defaultGood = '#66a61e';
const defaultBad = '#b5342d';
const defaultMultiple = '#e5ad23';

const activeRed = '#cd3e3e';
const activeGreen = '#3ecd3e';
const multipleRed = 'rgb(213, 142, 142)';
const multipleGreen = 'rgb(142, 213, 142)';

export const defaultInactiveLight = '#dddddd';
export const defaultInactiveDark = '#383838';

export const stateColors = {

    // Special states

    'unknown' : "#888888",
    'unavailable' : "#aaaaaa",
    'idle' : "#aaaaaa",

    // on = red , off = inactive (default fallback used for all device classes not explicitely mentioned)

    'on' : activeRed, 
    'off' : defaultInactiveLight,
    'binary_sensor.multiple' : multipleRed,

    // on = green , off = inactive

    'battery_charging.on': activeGreen,
    'battery_charging.multiple': multipleGreen,
    'plug.on': activeGreen,
    'plug.multiple': multipleGreen,
    'running.on': activeGreen,
    'running.multiple': multipleGreen,
    'update.on': activeGreen,
    'update.multiple': multipleGreen,

    // on = good (green), off = bad (red)

    'connectivity.on': defaultGood,
    'connectivity.off': defaultBad,
    'connectivity.multiple': defaultMultiple,
    'power.on': defaultGood,
    'power.off': defaultBad,
    'power.multiple': defaultMultiple,
    'presence.on': defaultGood,
    'presence.off': defaultBad,
    'presence.multiple': defaultMultiple,

    // on = bad (red), off = good (green)

    'gas.on': defaultBad,
    'gas.off': defaultGood,
    'gas.multiple': defaultMultiple,
    'smoke.on': defaultBad,
    'smoke.off': defaultGood,
    'smoke.multiple': defaultMultiple,
    'problem.on': defaultBad,
    'problem.off': defaultGood,
    'problem.multiple': defaultMultiple,
    'safety.on': defaultBad,
    'safety.off': defaultGood,
    'safety.multiple': defaultMultiple,

    // person domain

    'person.home' : '#66a61e',
    'person.not_home' : '#b5342d',
    'person.arriving' : '#d5bd43',
    'person.leaving' : '#d5bd43',
    'person.multiple' : '#e5ad23',

    // weather domain

    'weather.cloudy' : '#91acce',
    'weather.fog' : '#adadad',
    'weather.rainy' : '#5285df',
    'weather.partlycloudy' : '#11a3e9',
    'weather.sunny' : '#e9db11',
    'weather.multiple' : '#aaaaaa',

    // automation domain

    'automation.on': activeGreen,
    'automation.multiple': multipleGreen,

    // 

    'input_select.Arret' : defaultInactiveLight, 
    'input_select.Eco' : '#44739e', 
    'input_select.Confort - 2' : '#53b8ba', 
    'input_select.Confort - 1' : '#984ea3', 
    'input_select.Confort' : '#e99745',

    // 

    'sensor.WCDMA' : '#44739e', 
    'sensor.LTE' : '#984ea3',

};

export const stateColorsDark = {

    'off' : defaultInactiveDark, 

    'input_select.Arret' : defaultInactiveDark, 

};

export function parseColor(c)
{
    if( c && c.constructor == Object ) return c;
    while( c && c.startsWith('--') ) c = getComputedStyle(document.body).getPropertyValue(c);
    return c;
}

export function parseColorRange(r, v)
{
    let c, c1, m, n;

    for( let i in r ) {
        const j = i*1;
        if( v >= j && (m == undefined || j > m) ) { c = r[i]; m = j; }
        if( v < j && (n == undefined || j < n) ) { c1 = r[i]; n = j; }
    }

    return c ?? c1;
}
