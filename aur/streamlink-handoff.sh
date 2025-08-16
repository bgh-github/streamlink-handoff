#!/usr/bin/env bash

message_byte_length=$(od --address-radix=n --read-bytes=4 --format=dL)
message=$(head --bytes="${message_byte_length}")
message=$(echo "${message}" | sed --expression='s|^"\(.*\)"$|\1|')

streamlink ${message} > /dev/null 2>&1
