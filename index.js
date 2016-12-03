var express = require('express');
var locale = require('locale');
var app = express();

app.get('/', (req, res) => {
    var osStrBeginIndex = req.headers['user-agent'].indexOf('(') + 1;
    var osStrEndIndex = req.headers['user-agent'].indexOf(')');
    var os = req.headers['user-agent'].slice(osStrBeginIndex, osStrEndIndex);
    
    res.json({
        'ipaddress': req.headers['x-forwarded-for'],
        'language': new locale.Locales(req.headers['accept-language'])[0],
        'software': os
    });
});

app.listen(process.env.PORT, () => console.log('Request Header Parser running on port ' + process.env.PORT));