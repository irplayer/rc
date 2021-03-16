// https://github.com/csscomb/csscomb.js/blob/dev/doc/options.md
const order = [
    ['$import', '$include', '$extend'],
    ['content', 'visibility', 'position', 'z-index', 'display'],
    ['float', 'clear'],
    ['flex', 'flex-flow', 'flex-direction', 'flex-wrap', 'flex-order', 'flex-pack', 'flex-align'],
    ['grid-template', 'grid-template-rows', 'grid-template-columns', 'grid-template-areas', 'grid-gap', 'grid-area'],
    ['place-items', 'align-items', 'justify-items', 'place-content', 'align-content', 'justify-content'],
    ['box-sizing', 'overflow', 'overflow-x', 'overflow-y', 'top', 'right', 'bottom', 'left'],
    ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'aspect-ratio', 'object-fit'],
    ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
    ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
    ['color'],
    [
        'font',
        'font-style',
        'font-variant',
        'font-weight',
        'font-size',
        'line-height',
        'font-family',
        'font-stretch',
        'font-effect',
        'font-emphasize',
        'font-emphasize-position',
        'font-emphasize-style',
        'font-smooth',
        'font-smoothing',
        'src',
        // [font-style] [font-variant] [font-weight] font-size [ / line-height] font-family;
    ],
    [
        'text-align',
        'text-align-last',
        'vertical-align',
        'white-space',
        'text-decoration',
        'text-indent',
        'text-justify',
        'letter-spacing',
        'word-spacing',
        'text-outline',
        'text-transform',
        'text-wrap',
        'word-wrap',
        'text-overflow',
        'word-break',
        'text-shadow',
    ],
    [
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-spacing',
        'border-collapse',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-left-radius',
        'border-bottom-right-radius',
        'border-image',
    ],
    ['list', 'list-style', 'list-style-type', 'list-style-position', 'list-style-image'],
    ['outline', 'outline-width', 'outline-style', 'outline-color', 'outline-offset'],
    [
        'background',
        // background: [color] [image] [repeat] [attachment] [position] / [size] [origin] [clip];
        'background-color',
        'background-image',
        'background-repeat',
        'background-attachment',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-size',
        'background-origin',
        'background-clip',
    ],
    ['backdrop-filter', 'box-shadow'],
    ['transition', 'transform', 'opacity', 'filter'],
    [
        'animation',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-play-state',
    ],
    ['quotes', 'counter-reset', 'counter-increment', 'resize', 'zoom', 'cursor', 'pointer-events', 'user-select'],
    ['stroke', 'stroke-width', 'vector-effect', 'fill'],
    ['-webkit-app-region'],
    ['hue', 'saturation', 'lightness'],
];

const spaces = {
    css: {
        'space-before-combinator': ' ', // combinator (i.e. 'p > a')
        'space-after-combinator': ' ',
        'space-before-opening-brace': ' ', // '{'
        'space-after-opening-brace': ' ',
        'space-before-closing-brace': ' ', // '}'
        'space-between-declarations': ' ', // declarations (i.e. 'color: tomato')
    },
    preprocessors: {
        'space-before-combinator': ' ', // combinator (i.e. 'p > a')
        'space-after-combinator': ' ',
        'space-before-opening-brace': ' ', // '{'
        'space-after-opening-brace': '\n',
        'space-before-closing-brace': '\n', // '}'
        'space-between-declarations': '\n', // declarations (i.e. 'color: tomato')
    },
};

const vscode = require('vscode');

const lang = vscode.window.activeTextEditor.document.languageId;
const space = (lang => {
    switch (lang) {
        case 'scss':
        case 'less':
        case 'vue':
            lang = 'preprocessors';
            break;
        default:
            lang = 'css';
            break;
    }
    return spaces[lang];
})(lang);

module.exports = {
    ...space,
    'always-semicolon': true,
    'block-indent': 4,
    'color-case': 'lower',
    'color-shorthand': true,
    'element-case': 'lower',
    // 'eof-newline': false,
    // 'expanded': true,
    'leading-zero': true,
    'quotes': 'single',
    'remove-empty-rulesets': true,
    'strip-spaces': true,
    'unitless-zero': true,
    'vendor-prefix-align': false,

    'space-before-colon': '', // ':'
    'space-after-colon': ' ',

    'space-before-selector-delimiter': '',
    'space-after-selector-delimiter': '\n',

    'lines-between-rulesets': 0,

    'sort-order-fallback': 'abc',
    'sort-order': order.flat(),
};
