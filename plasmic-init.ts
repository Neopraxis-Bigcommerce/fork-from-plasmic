import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

const PLASMIC_PROJECT_ID = process.env["jTKbAFLJzNqzk5Sx157Ti8"];
const PLASMIC_PROJECT_API_TOKEN =
  process.env["KFchRf4qByVG7ZtP3nWWpzgKZK7VvvZCpqNOSPIBZaDVLgmvEKMf6hv1ySIRQCQGlU0WFosCNU0pVojBLQ"];

const PLASMIC_CONFIG = {
  projects: [
    {
      id: 'jTKbAFLJzNqzk5Sx157Ti8',
      token: 'KFchRf4qByVG7ZtP3nWWpzgKZK7VvvZCpqNOSPIBZaDVLgmvEKMf6hv1ySIRQCQGlU0WFosCNU0pVojBLQ',
    },
  ],
};

export const PLASMIC = initPlasmicLoader({
  ...PLASMIC_CONFIG,
  preview: true,
});

export const PREVIEW_PLASMIC = initPlasmicLoader({
  ...PLASMIC_CONFIG,
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
