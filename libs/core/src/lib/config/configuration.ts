export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT_SSR || '3000', 10),
})
