export function isStagingApi() {
  const siteUrl = process.env.NEXT_PUBLIC_API_URL;
  const validKeys = ['staging', 'dev', 'rocks'];
  return validKeys.some((key) => siteUrl?.includes(key));
}