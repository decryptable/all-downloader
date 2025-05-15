import { v7 as uuid } from "uuid"
import CryptoJS from "crypto-js"

/**
 * Represents the main class for interacting with the API.
 */
class AllDownloader
{
    private activationKey: string = ''
    private apiToken: string = ''

    /**
     * Private constructor to enforce use of static factory method.
     */
    private constructor() { }

    /**
     * Creates and initializes an instance of AllDownloader.
     * @returns {Promise<AllDownloader>} A promise that resolves to an initialized AllDownloader instance.
     */
    static async createInstance (): Promise<AllDownloader>
    {
        const instance = new AllDownloader()
        await instance.initialize()
        return instance
    }

    /**
     * Initializes the downloader by retrieving API credentials.
     * @private
     * @throws Will throw an error if initialization fails.
     */
    private async initialize ()
    {
        const apiKey = await this.generateApiKey()

        if (!apiKey)
        {
            throw new Error("Failed to initialize All Downloader library.")
        }

        this.apiToken = apiKey.api_token
        this.activationKey = apiKey.activation_key
    }

    /**
     * Requests a trial API key and activation credentials from the API.
     * @private
     * @returns {Promise<LicenseTrialData | null>} The license data or null if an error occurs.
     */
    private async generateApiKey (): Promise<LicenseTrialData | null>
    {
        try
        {
            const req = await fetch('https://snapdownloader.com/api/v6/licenses/trial', {
                body: new URLSearchParams({
                    'uuid': CryptoJS.MD5(uuid()).toString(CryptoJS.enc.Hex),
                    'tk': 'F8XQUvsAtxcR8BKfA7wotRBmm',
                    'os': 'win'
                }),
                method: "POST"
            })

            const res = await req.json() as LicenseTrial
            if (!res.success) throw new Error(res.data as string)

            return (res.data as Data).data
        } catch (err)
        {
            console.error(err)
            return null
        }
    }

    /**
     * Parses a video URL and retrieves its metadata.
     * @param {string} url - The URL of the video to parse.
     * @returns {Promise<VideoData | null>} The parsed video data, or null if parsing fails.
     * @throws Will throw an error if the URL is invalid.
     */
    async parse (url: string): Promise<VideoData | null>
    {
        if (!this.isValidUrl(url)) throw new Error("Invalid URL")

        try
        {
            const req = await fetch('https://snapdownloader.com/api/v6/video-info', {
                body: new URLSearchParams({
                    'link': url,
                    'tk': 'jkxHUcfFb7NAAdbUDWR8Zh7aM',
                    'ak': this.activationKey,
                    'apk': this.apiToken,
                }),
                method: "POST"
            })

            const res = await req.json() as ParseResponse
            if (!res.success) throw new Error(res.data as string)

            return res.data as VideoData
        } catch (err)
        {
            console.error(err)
            return null
        }
    }

    /**
     * Validates the provided URL.
     * @private
     * @param {string} url - The URL to validate.
     * @returns {boolean} True if the URL is valid, false otherwise.
     */
    private isValidUrl (url: string): boolean
    {
        try
        {
            new URL(url)
            return true
        } catch
        {
            return false
        }
    }
}

let instance: AllDownloader

/**
 * Parses a video URL using a singleton instance of AllDownloader.
 * @param {string} url - The video URL to parse.
 * @returns {Promise<VideoData | null>} Parsed video metadata or null on failure.
 */
export async function parse (url: string): Promise<VideoData | null>
{
    if (!instance)
    {
        instance = await AllDownloader.createInstance()
    }
    return instance.parse(url)
}

export { AllDownloader }

