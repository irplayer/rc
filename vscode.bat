@echo off
title mklink

set settings=%HOMEDRIVE%%HOMEPATH%\appdata\roaming\code\user\settings.json
del %settings%
mklink %settings% %cd%\vscode.jsonc

set keybindings=%HOMEDRIVE%%HOMEPATH%\appdata\roaming\code\user\keybindings.json
del %keybindings%
mklink %keybindings% %cd%\vscode.keybindings.jsonc

set formatter=%HOMEDRIVE%%HOMEPATH%\.vscode\extensions\chuaple.php-formatter-1.0.0
rd %formatter%
mklink /D %formatter% %cd%\vscode-php-formatter

pause
