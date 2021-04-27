#!/bin/bash
rm -r ./public/*

mkdir public
cp ../ImageScript/README.md README.md
node convert.js

jsdoc --configure .jsdoc.json --verbose

mv docs/CNAME CNAME
rm -r docs/*
mv public/* docs
rm -r public
mv CNAME docs/CNAME

cp ./favicon.ico ./public/favicon.ico
