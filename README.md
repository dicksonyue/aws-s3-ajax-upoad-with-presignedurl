# AWS AJAX s3 upload with presigned URL
Overview
- If you want to put an object to S3 straight through ajax upload, i.e. in a web browser, mobile apps webview view. This javascipt sample code will guide you through how to set the ajax setting parameters correctly in order to put object to S3 purely with a presigned URL and javascript.

Setup
- signed url setup
  - update the bucket and object key in ./nodejs/gen-url.js
  - run "node gen-url.js" to get PreSigned url
- html upload setup
  - filled in the preSigned

Remarks
- Remember to specified the contentType during sign and ajax call
