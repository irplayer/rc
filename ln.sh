#!/bin/bash
# author: chuaple
# create: 2019/07/16

set -u

dir=$(cd $(dirname $0) && pwd)

link() {
    local dest=~
    test $# -gt 1 && dest=$2
    ln -s -f $dir/$1 $dest
    ls -l $dest/$1
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
# link settings.json ~/.config/Code/User

link chuaple.php-formatter-1.0.0 ~/.vscode/extensions

echo Done
