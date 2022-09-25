import pinataSDK, { PinataPinResponse } from "@pinata/sdk"
import path from "path"
import fs from "fs"

export type MetaData = {
  name: string
  description: string
  image: string
  attributes: [
    {
      trait_type: "Cuteness"
      value: number
    }
  ]
}

const PINATA_API_KEY = process.env.PINATA_API_KEY || ""
const PINATA_API_SECRET = process.env.PINATA_API_SECRET || ""

const pinata = pinataSDK(PINATA_API_KEY, PINATA_API_SECRET)

export async function storeImagesInPinata(imagesFilePath: string) {
  const fullPath = path.resolve(imagesFilePath)
  const files = fs.readdirSync(fullPath)
  const responses: PinataPinResponse[] = []
  for (const fileIndex in files) {
    console.log(`Uploading ${files[fileIndex]}`)
    const readableStreamForFile = fs.createReadStream(`${fullPath}/${files[fileIndex]}`)
    try {
      const result = await pinata.pinFileToIPFS(readableStreamForFile, {})
      responses.push(result)
    } catch (error) {
      console.log("Error [Pinata]: failed to pin files to IPFS")
    }
  }

  return {
    responses,
    files,
  }
}

export async function storeTokenMetadataInPinata(metadata: MetaData) {
  try {
    const response = await pinata.pinJSONToIPFS(metadata)
    return response
  } catch (error) {
    console.log(error)
  }
}
