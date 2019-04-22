'use strict';
const output = require('./output');
let leval = 0;
let string = false;

function formatCode(code) {
    if (code.substring(0, 5) !== '<?php') {
        output('[formatCode] Skip');
        return code;
    }
    output('[formatCode] Start');
    leval = 0;
    string = false;
    // 设置缩进并去除尾随空格
    code = separatCode(code, /\r?\n/, indentSnippets, '\n');
    // 函数/类前添加空行
    code = code.replace(/([^\{])\n+( *(public |private )?(function |class ))/g, '$1\n\n$2');
    // 仅保留一个空行
    code = code.replace(/(\n{2,})/g, '\n\n');
    code = code.replace(/\\"/g, 'slantandquote');
    code = separatCode(code, '"', formatSnippets);
    code = code.replace(/slantandquote/g, '\\"');
    return code;
}

function separatCode(code, separator, callback, joiner) {
    const codes = code.split(separator);
    for (const i in codes) {
        codes[i] = callback(codes[i], i);
    }
    return codes.join(joiner || separator);
}

function indentSnippets(code) {
    if (!string) {
        // trim
        code = code.replace(/(^\s*)|(\s*$)/g, '');
        // indent
        if ('})]'.indexOf(code.charAt(0)) >= 0) leval--;
        if (code) {
            for (let i = 0; i < leval * 4; i++) {
                code = ` ${code}`;
            }
        }
        if ('{(['.indexOf(code.charAt(code.length - 1)) >= 0) leval++;
    }
    const quotes = (code.match(/"/g) || []).length;
    if (quotes > 0 && quotes % 2 === 1) string = !string;
    return code;
}

function formatSnippets(code, index) {
    if (index % 2 === 0) {
        code = setSpace(code);
    }
    return code;
}

function setSpace(code) {
    return code
        .replace(/ ?([\+\-\*\/\.\?!><]?={1,3})(?!\>) ?/g, ' $1 ') // `=` [>1]
        .replace(/ ?([\&\|]{2}) ?/g, ' $1 ') // `$$` `||` [>1]
        .replace(/ *(,) ?(?!\n)/g, '$1 ') // `,` [0, >1]
        .replace(/\n* *(\{)/g, ' $1') // before `{` [1]
        .replace(/ *(\))/g, ' $1') // before `)` [1]
        .replace(/(\() */g, '$1 ') // after `(` [1]
        .replace(/\(\s*\)/g, '()') // blank `()` `[]`
        .replace(/(if|for|each)\s*\(/g, '$1 (') // after `if` `for` and `each`
        .replace(/\}\s*else\s*\{/g, '} else {'); // blank `else`
}

module.exports = formatCode;
