#!/bin/bash

# add changefile
echo '[firebase] adding change'
firebase use --add

# add changefile
echo '[firebase] deploy'
firebase deploy