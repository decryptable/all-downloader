import { parse } from "../src/index"

jest.setTimeout(20000)

describe("AllDownloader parse function", () =>
{
    test("should throw error on invalid URL", async () =>
    {
        await expect(parse("invalid-url")).rejects.toThrow("Invalid URL")
    })

    test("should return video data on valid URL", async () =>
    {
        const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        const data = await parse(url)
        expect(data).toBeDefined()
        expect(typeof data).toBe("object")
        expect(data).toHaveProperty("title")
        expect(data).toHaveProperty("formats")
        expect(Array.isArray(data?.formats)).toBe(true)
    })
})
