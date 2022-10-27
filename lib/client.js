// this is where we connect to sanity and pull product info

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'uant6phr',
    dataset: 'production',
    apiVersion: '2022-10-25',
    useCdn: 'true',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);