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
    shell.Run(command.join(' '), 0, false);
}

function mklink(src, dst, file) {
    if (file) {
        src += file;
        dst += file;
    }
    log(src + ' --> ' + dst);
    run([file ? 'del' : 'rd', dst, '&', 'mklink', file ? '' : '/D', dst, src]);
}

var current = fso.GetFile(WScript.ScriptFullName).ParentFolder.Path + '\\';
var home = shell.ExpandenVironmentStrings('%HOMEDRIVE%%HOMEPATH%') + '\\';
var user = home + 'AppData\\Roaming\\Code\\User\\';

log('Begin');
mklink(current + 'files\\', home, '.jsbeautifyrc');
mklink(current + 'files\\', home, '.csscomb.js');
mklink(current + 'files\\', user, 'settings.json');
mklink(current + 'files\\', user, 'keybindings.json');
mklink(current + 'chuaple.php-formatter-1.0.0', home + '.vscode\\extensions\\chuaple.php-formatter-1.0.0');
log('Done');
