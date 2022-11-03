import {
	Box, Button,
	Center, Heading, Image, Text, Wrap,
	WrapItem
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

import { mapImageResources, search } from '../lib/cloudinary';

export default function Gallery({photos, nextCursor: defaultNextCursor}) {
	const [images, setImages] = useState(photos);
	const [nextCursor, setNextCursor] = useState(defaultNextCursor);

	async function handleLoadMore(event) {
		event.preventDefault();
		const results = await fetch('/api/search', {
			method: 'POST',
			body: JSON.stringify({
				nextCursor
			})
		}).then(r => r.json());

		const {resources, next_cursor: updatedNextCursor} = results;

		const photos = mapImageResources(resources);

		setImages(prev => {
			return [
				...prev,
				...photos,
			]
		})

		setNextCursor(updatedNextCursor);
	}

	return (
		<>
			<Head>
				<title>
					Gallery | Samson`s Grounds Maintenance | Tucson, AZ
				</title>
				<meta name="description" content="Samson`s Grounds Maintenance. Our gallery shows a small portion of our hard work!" />
			</Head>
			<Box minHeight={'calc(100vh - 245px)'}>
				<Center paddingBlock={5}>
				<Heading
					lineHeight={1.1}
					fontWeight={600}
					fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
					<Text
						as={'span'}
						position={'relative'}
						_after={{
							content: "''",
							width: "full",
							height: "8%",
							position: "absolute",
							bottom: 1,
							left: 0,
							bg: "yellow.500",
							zIndex: -1,
							borderRadius: "500px",
						}}
						fontStyle={'italic'}
						>
						Photo Gallery
					</Text>
				</Heading>
				</Center>
				<Wrap px="1rem" spacing={4} justify="center">
					{images.map((pic: any) => (
						<WrapItem
							key={pic.id}
							boxShadow="base"
							rounded="20px"
							overflow="hidden"
							bg="white"
							lineHeight="0"
						>
							
							
								<Image
									src={pic.image}
									height={'100%'}
									width={'100%'}
									maxHeight={'500px'}
									objectFit={'fill'}
									alt={pic.title}
								/>
							
							
						</WrapItem>
					))}
				</Wrap>
				<Center paddingBlock={5}>
					<Button colorScheme={'yellow'} backgroundColor={'yellow.500'} onClick={handleLoadMore}>Load More Images</Button>
				</Center>
			</Box>
		</>
	);
}

export async function getStaticProps() {
	const results = await search();

	const {resources, next_cursor: nextCursor} = results;

	const photos = mapImageResources(resources);

	return {
		props: {
			photos,
			nextCursor
		}
	}
}