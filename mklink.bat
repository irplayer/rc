@echo off
title mklink

set home=%HOMEDRIVE%%HOMEPATH%

set file=.jsbeautifyrc
set rc=%home%\%file%
del %rc%
mklink %rc% %cd%\%file%

set file=csscomb.js
set rc=%home%\%file%
del %rc%
mklink %rc% %cd%\%file%

set file=settings.json
set rc=%home%\appdata\roaming\code\user\%file%
del %rc%
mklink %rc% %cd%\%file%

set file=keybindings.json
set rc=%home%\appdata\roaming\code\user\%file%
del %rc%
mklink %rc% %cd%\%file%

set formatter=%home%\.vscode\extensions\chuaple.php-formatter-1.0.0
rd %formatter%
mklink /D %formatter% %cd%\vscode-php-formatter

pause
