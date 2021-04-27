#!/bin/bash
rm -r ./public/*

mkdir public
cp ../ImageScript/README.md README.md
node convert.js

jsdoc --configure .jsdoc.json --verbose

rm -r docs/*
mv public docs

cp ./favicon.ico ./public/favicon.ico
