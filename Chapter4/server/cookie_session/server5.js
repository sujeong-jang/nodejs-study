const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const parseCookies = (cookie = '') =>
  cookies
    .split(';')
    .map(v => v.split('='))
    .map(([k, ... vs]) => [k, vs.join('=')])
    .reduce((acc, [k,v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {};
