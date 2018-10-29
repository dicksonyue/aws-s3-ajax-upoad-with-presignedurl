
var AWS = require('aws-sdk');

var s3 = new AWS.S3();
var bucket = "{your bucket}";
var objectkey = "{you image presign.png}";

var presignedurlupload = s3.getSignedUrl('putObject', {
    Bucket: bucket,
    Key: objectkey,
    ContentType: 'image/png',
    ACL: 'public-read'

});

var presignedurldownload = s3.getSignedUrl('getObject', {
    Bucket: bucket,
    Key: objectkey,
    ResponseContentType: 'image/png'
});

console.log( presignedurlupload  );
console.log( presignedurldownload );
