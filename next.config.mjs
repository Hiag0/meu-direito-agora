/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.replace(/.*\//, '') ?? ''
const customDomain = process.env.CUSTOM_DOMAIN?.trim()
const basePath = isGithubActions && repoName && !customDomain ? `/${repoName}` : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
