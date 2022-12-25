## How to upload in moralis V2:

- Notice: It is really easier and much more convenient compared to moralis V1

* You have to get API_KEY
* Then you will read through my code in image.js and index.js to understand it
  - Content in abi is array of Object that has property path and content
    - path: name of file in folder, for example I put path is "Goku" you will get /ipfs/{cid}/Goku
    - content: content of files maybe metadata or image. Whatever it is, you have to read it in base64 or json. I prefer metadata in json and image in base64
  - index.js: just for upload 1 file, because now moralis only support for uploading folder so if you want to upload only 1 file
    and manage it to database, just upload one file in a folder
  - image.js: for upload a whole folder images
