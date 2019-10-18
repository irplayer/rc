module.exports = {
    'always-semicolon': true,
    'block-indent': '    ',
    'color-case': 'lower',
    'color-shorthand': true,
    'element-case': 'lower',
    'eof-newline': true,
    'expanded': true,
    'leading-zero': false,
    'quotes': 'single',
    'remove-empty-rulesets': true,
    'sort-order-fallback': 'abc',
    'strip-spaces': true,
    'unitless-zero': true,
    'vendor-prefix-align': false,

    'space-before-colon': '', // ':'
    'space-after-colon': ' ',

    'space-before-combinator': ' ', // combinator (i.e. 'p > a')
    'space-after-combinator': ' ',
    'space-before-opening-brace': ' ', // '{'
    'space-after-opening-brace': ' ',
    'space-before-closing-brace': ' ', // '}'

    // 'space-before-combinator': '', // combinator (i.e. 'p > a')
    // 'space-after-combinator': ' ',
    // 'space-before-opening-brace': ' ', // '{'
    // 'space-after-opening-brace': '\n',
    // 'space-before-closing-brace': '\n', // '}'

    'space-before-selector-delimiter': '',
    'space-after-selector-delimiter': '\n',
    'space-between-declarations': ' ', // declarations (i.e. 'color: tomato')

    'lines-between-rulesets': 0,
    'sort-order': [
        [
            'display',
            'visibility',
            'float',
            'clear',
            'position',
            'z-index',
            'content',
        ],
        [
            'flex-flow',
            'flex-direction',
            'flex-wrap',
            'flex',
        ],
        [
            'box-sizing',
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'overflow',
            'overflow-x',
            'overflow-y',
        ],
        [
            'clip',
            'zoom',
            'flex-direction',
            'flex-order',
            'flex-pack',
            'flex-align',
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
            'border-bottom-color',
            'border-left',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-image',
        ],
        [
            'src',
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
            'text-align',
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
        ],
        [
            'color',
            'stroke',
            'stroke-width',
            'background',
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
            'fill',
            // background: [color] [image] [repeat] [attachment] [position] / [size] [origin] [clip];
        ],
        [
            'list',
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',
        ],
        [
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
            'opacity',
            'box-shadow',
            'text-shadow',
            'cursor',
        ],
        [
            'transition',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-play-state',
        ],
    ],
};
