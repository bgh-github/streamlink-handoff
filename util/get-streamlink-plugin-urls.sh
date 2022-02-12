#!/bin/bash

readarray -t standard_plugins < <(wget --quiet --output-document=- https://streamlink.github.io/plugin_matrix.html | hxnormalize | hxclean | hxselect -c 'table tr td:nth-child(2) p' | grep '\S' | grep --invert-match '\.\.\.' | tr --delete " ")
readarray -t footnote_plugins < <(wget --quiet --output-document=- https://streamlink.github.io/plugin_matrix.html | hxnormalize | hxclean | hxselect -c 'dl.footnote p' | grep '\S' | tr --delete " ")

plugins_urls=(${standard_plugins[@]} ${footnote_plugins[@]})

echo $(printf "\"*://*.%s/*\", " "${plugins_urls[@]}") | sed 's/.$//'