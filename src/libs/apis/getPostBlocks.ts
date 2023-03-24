import { NotionAPI } from "notion-client"

export async function getPostBlocks(id: string) {
  const api = new NotionAPI()
  const pageBlock = await api.getPage(id)

  if (pageBlock && pageBlock.signed_urls) {
    const signedUrls = pageBlock.signed_urls
    const newSignedUrls = {} as any
    for (const p in signedUrls) {
      if (signedUrls[p] && signedUrls[p].includes(".amazonaws.com/")) {
        console.log("skip : " + signedUrls[p])
        continue
      }
      newSignedUrls[p] = signedUrls[p]
    }
    pageBlock.signed_urls = newSignedUrls
  }

  return pageBlock
}
