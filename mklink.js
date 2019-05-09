/* cmd: cscript mklink.js */
/* global WScript ActiveXObject */
/* eslint-disable no-var, prefer-template */
var shell = new ActiveXObject('WScript.Shell');
var fso = new ActiveXObject('Scripting.FileSystemObject');

function log(s) {
    WScript.Echo(s);
}

function run(command) {
    command.unshift('cmd', '/c');
    // log(command.join(' '));
    shell.Run(command.join(' '), 0, true);
}

function mklink(src, dst, file) {
    if (file) {
        src += file;
        dst += file;
    }
    log(src + ' --> ' + dst);
    run([file ? 'del' : 'rd', dst, '&&', 'mklink', file ? '' : '/D', dst, src]);
}

var current = fso.GetFile(WScript.ScriptFullName).ParentFolder.Path + '\\';
var home = shell.ExpandenVironmentStrings('%HOMEDRIVE%%HOMEPATH%') + '\\';
var user = home + 'AppData\\Roaming\\Code\\User\\';

log('Begin');
mklink(current, home, '.jsbeautifyrc');
mklink(current, home, 'csscomb.js');
mklink(current, user, 'settings.json');
mklink(current, user, 'keybindings.json');
mklink(current + 'vscode-php-formatter', home + '.vscode\\extensions\\chuaple.php-formatter-1.0.0');
log('Done');
