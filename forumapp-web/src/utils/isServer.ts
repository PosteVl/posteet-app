// helper function that tells us if we are  on the server or in the client
// for rendering purposes SSR vs CSR
// if window is undefined, we are on the server
export const isServer = () => typeof window === "undefined";