const order = require('/home/hs/.csscomb-order');

const spaces = {
    css: {
        'space-before-combinator': ' ', // combinator (i.e. 'p > a')
        'space-after-combinator': ' ',
        'space-before-opening-brace': ' ', // '{'
        'space-after-opening-brace': ' ',
        'space-before-closing-brace': ' ', // '}'
        'space-between-declarations': ' ', // declarations (i.e. 'color: tomato')
    },
    scss: {
        'space-before-combinator': '', // combinator (i.e. 'p > a')
        'space-after-combinator': ' ',
        'space-before-opening-brace': ' ', // '{'
        'space-after-opening-brace': '\n',
        'space-before-closing-brace': '\n', // '}'
        'space-between-declarations': '\n', // declarations (i.e. 'color: tomato')
    },
    less: {
        'space-before-combinator': '', // combinator (i.e. 'p > a')
        'space-after-combinator': ' ',
        'space-before-opening-brace': ' ', // '{'
        'space-after-opening-brace': '\n',
        'space-before-closing-brace': '\n', // '}'
        'space-between-declarations': ' ', // declarations (i.e. 'color: tomato')
    },
};

const vscode = require('vscode');
const lang = vscode.window.activeTextEditor.document.languageId;
const space = (lang => {
    switch (lang) {
        case 'scss':
        case 'vue':
            lang = 'scss';
            break;
        case 'less':
            lang = 'less';
            break;
        default:
            lang = 'css';
            break;
    }
    return spaces[lang];
})(lang);
console.log({ lang, space });

module.exports = {
    ...space,
    'always-semicolon': true,
    'block-indent': '    ',
    'color-case': 'lower',
    'color-shorthand': true,
    'element-case': 'lower',
    // 'eof-newline': false,
    'expanded': true,
    'leading-zero': true,
    'quotes': 'single',
    'remove-empty-rulesets': true,
    'sort-order-fallback': 'abc',
    'strip-spaces': true,
    'unitless-zero': true,
    'vendor-prefix-align': false,

    'space-before-colon': '', // ':'
    'space-after-colon': ' ',

    'space-before-selector-delimiter': '',
    'space-after-selector-delimiter': '\n',

    'lines-between-rulesets': 0,
    'sort-order': order.flat(),
};
