#!/bin/bash

message_byte_length=$(od --address-radix=n --read-bytes=4 --format=dL | tr --delete " ")
message=$(od --address-radix=n --read-bytes="${message_byte_length}" --format=x1 | xxd --plain --revert)
message=$(echo "${message}" | sed --expression='s/^"\(.*\)"$/\1/')

streamlink ${message} > /dev/null 2>&1
