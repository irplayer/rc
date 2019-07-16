#!/bin/bash
# author: chuaple
# create: 2019/07/16

path=$(cd `dirname $0`; pwd)

link() {
    if [ -f ~/$1 ]; then rm ~/$1; fi
    ln -s $path/$1 ~
    ls -l ~/$1
}

links() {
    for arg in "$@"
    do
        link $arg
    done
}

echo Begin
links .prettierrc.js .eslintrc.js .clang-format .jsbeautifyrc csscomb.js
echo Done
