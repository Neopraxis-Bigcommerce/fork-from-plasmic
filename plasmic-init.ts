import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "jTKbAFLJzNqzk5Sx157Ti8",  // ID of a project you are using
      token: "KFchRf4qByVG7ZtP3nWWpzgKZK7VvvZCpqNOSPIBZaDVLgmvEKMf6hv1ySIRQCQGlU0WFosCNU0pVojBLQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})