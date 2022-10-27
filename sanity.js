// import {
//   createImageUrlBuilder,
//   createCurrentUserHook,
//   createClient,
// } from "next-sanity";

// export const config = {
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   apiVersion: "2022-26-10",
//   useCdn: process.env.NODE_ENV === "production",
//   // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// };

// export const sanityClient = createClient(config);

// export const urlFor = (source) => createImageUrlBuilder(config).image(source);

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-10-10",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
