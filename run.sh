#!/usr/bin/zsh

export DENO_INSTALL="/home/henrique/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

alias gen_cpf="deno run --allow-run /home/henrique/Projetos/gerador-cpf-cnpj-clipboard/index.js cpf"

gen_cpf