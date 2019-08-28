#!/bin/bash
# author: chuaple
# create: 2019/07/16

set -u

dir=$(cd $(dirname $0) && pwd)

link() {
    local dest=~
    test $# -gt 1 && dest=$2
    ln -s -f $dir/$1 $dest
    if [ -f $dest ]; then
        ls -l $dest
    else
        ls -l $dest/$1
    fi
}

links() {
    local arg
    for arg in "$@"; do
        link $arg
    done
}

echo Begin

links .prettierrc.js .eslintrc.js .clang-format .jsbeautifyrc csscomb.js

link keybindings.json ~/.config/Code/User
link settings.jsonc ~/.config/Code/User/settings.json

link chuaple.php-formatter-1.0.0 ~/.vscode/extensions

echo Done
