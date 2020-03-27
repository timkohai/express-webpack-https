#!/usr/bin/env bash
openssl genrsa -out rootCA.key 2048
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem -subj "/C=US/ST=CA/L=Concord/O=DeveloperOrg/OU=CD/CN=main.demoapp.com"
