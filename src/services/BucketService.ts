import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
})

export async function getObject(key) {
  const command = new GetObjectCommand({
    Bucket: 'notify-app-bucket',
    Key: key,
  })
  const signedUrl = await getSignedUrl(s3Client, command)
  return signedUrl
}

console.log('signed url', getObject("IMG_6023.jpg"))

export default {s3Client}
