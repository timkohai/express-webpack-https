#!/usr/bin/env bash
openssl genrsa -out keys/rootCA.key 2048
openssl req -x509 -new -nodes -key keys/rootCA.key -sha256 -days 1024 -out keys/rootCA.pem -subj "/C=US/ST=CA/L=Concord/O=DeveloperOrg/OU=CD/CN=client.demoapp.com"
