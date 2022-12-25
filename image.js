const Moralis = require("moralis").default;
const fs = require("fs");
const path = require("path");

const runApp = async () => {
	await Moralis.start({
		apiKey: "JjKRN1NHgXJyV7AyHMAMcfWJNYGwgda2C7jPjHFIkOqI5cOj3Qtecx9hsSBIExhQ",

		// ...and any other configuration
	});
	const fullImageBase64 = [];
	for (let i = 1; i <= fs.readdirSync("images").length; i++) {
		fullImageBase64.push({
			path: `${i}`,
			content: fs.readFileSync(
				path.resolve(path.resolve("images"), `${i}.jpg`),
				"base64"
			),
		});
	}
	const response = await Moralis.EvmApi.ipfs.uploadFolder({
		abi: fullImageBase64,
	});
	//  RESULT OF IT IS HERE:
	/**
   * [
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/1'
      },
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/2'
      },
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/3'
      },
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/4'
      },
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/5'
      },
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/6'
      },
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/7'
      },
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/8'
      },
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/9'
      },
      {
        path: 'https://ipfs.moralis.io:2053/ipfs/QmRqRWfChBr5ybh5cdMqJSF5712YdzEdAqEc3wRBkt5VdD/10'
      }
    ]
   */
	console.log(response.toJSON());
};

runApp();
