const Base64 = require('Base64');
const pako = require('pako');
const builder = require('xmlbuilder');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const parseString = require('xml2js').parseString;

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://pastebin.com/raw/iWi1H6i3');
xhr.onload = response => {
  const raw = xhr.responseText;

  let xml_raw = raw.replace(new RegExp('-', 'g'), '+').replace(new RegExp('_', 'g'), '/'); 
  let xml_string = pako.inflate(Base64.atob(xml_raw)); let data = pako.inflate(Base64.atob(xml_raw)); let charArray = String.fromCharCode.apply(null, new Uint16Array(data));

  let xml = builder.create(charArray).name;

  parseString(xml, (err, result) => {
    let xml_obj = result;
    console.log(xml_obj);
  });
};
xhr.send();
