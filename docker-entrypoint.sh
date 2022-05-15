#!/usr/bin/env bash

# start react frontend
cd /landingpage_frontend
npm start&

# start express.js backend
cd /landingpage_backend
node ./server.js