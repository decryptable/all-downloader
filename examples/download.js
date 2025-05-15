import { parse } from "all-downloader"
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Enter video URL: ", async (url) => {
  try {
    const result = await parse(url)
    console.log(result)
  } catch (err) {
    console.error("Error parsing URL:", err)
  } finally {
    rl.close()
  }
})
