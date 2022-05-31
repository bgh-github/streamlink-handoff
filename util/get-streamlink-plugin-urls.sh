#!/bin/bash

readarray -t plugin_urls < <(curl --silent https://streamlink.github.io/plugins.html | hxnormalize | hxclean | hxselect -c '#plugins section dl dd.field-even:nth-of-type(2) ul li p' | grep '\S' | tr --delete " ")
readarray -t plugin_urls < <(printf "\"*://*.%s/*\"\n" "${plugin_urls[@]}")

echo "$(IFS=,; echo "${plugin_urls[*]}" | sed --expression='s/,/, /g')"