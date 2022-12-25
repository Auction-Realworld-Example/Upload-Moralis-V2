const Moralis = require("moralis").default;

const runApp = async () => {
	await Moralis.start({
		apiKey: "JjKRN1NHgXJyV7AyHMAMcfWJNYGwgda2C7jPjHFIkOqI5cOj3Qtecx9hsSBIExhQ",

		// ...and any other configuration
	});

	const abi = [
		{
			path: "metadata.json",
			content: {
				name: "NFT Name",
				description: "This will be the NFT description.",
				image:
					"ipfs://bafybeihewi4brhhmjqvquwdqnlzhnamfh26txwmw2fe4nfswfckpthowna/brandResoursesMage2.svg",
				attributes: [
					{
						trait_type: "Base",
						value: "Starfish",
					},
					{
						trait_type: "Eyes",
						value: "Big",
					},
					{
						trait_type: "Mouth",
						value: "Surprised",
					},
				],
			},
		},
	];

	const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

	console.log(response.toJSON());
};

runApp();
