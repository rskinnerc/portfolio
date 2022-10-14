import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

export const storyblok = () => {
  storyblokInit({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    apiOptions: {
      region: "us", // Pass this key/value if your space was created under US region
    },
    use: [apiPlugin],
  });
};

export default getStoryblokApi;
