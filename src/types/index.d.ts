/**
 * Represents a video or audio format.
 */
interface Format
{
    /** Unique identifier for the format */
    format_id: string
    /** URL to download the media */
    download_url: string
    /** Size of the file in bytes, or null if unknown */
    filesize: number | null
    /** Additional notes about the format */
    format_note: string
    /** Format description (e.g., "mp4", "webm") */
    format: string
    /** Audio codec used (e.g., "aac", "mp3") or null if not applicable */
    acodec: string | null
    /** Video codec used (e.g., "h264") or null if not applicable */
    vcodec: string | null
    /** Audio bitrate in kbps, or null */
    abr: number | null
    /** Frames per second, optional */
    fps?: number
    /** Video height in pixels, or null */
    height: number | null
    /** Video width in pixels, or null */
    width: number | null
    /** Additional format metadata */
    format_info: {
        format?: string
        resolution?: string
        type?: string
        name?: string
        resolutionName?: string
    } | null
    /** Indicates if this is a video format */
    is_video?: boolean
    /** File extension (e.g., "mp4", "mkv") */
    ext: string
}

/**
 * Represents a subtitle track.
 */
interface Subtitle
{
    /** Supported subtitle file extensions */
    extensions: string[]
    /** Language code (e.g., "en", "es") */
    lang: string
    /** Display name of the subtitle, or null */
    name: string | null
    /** Type of subtitle (e.g., "auto", "manual") */
    type: string
}

/**
 * Represents a chapter in the video.
 */
interface Chapter
{
    /** Start time of the chapter in seconds */
    start_time: number
    /** Title of the chapter */
    title: string
    /** End time of the chapter in seconds */
    end_time: number
    /** Sequence number of the chapter */
    count: number
}

/**
 * Represents detailed video metadata.
 */
interface VideoData
{
    /** Video title */
    title: string
    /** Original video URL */
    link: string
    /** Video description, if available */
    description?: string | null
    /** Name of the site/extractor used */
    extractor: string
    /** Type of extractor used, if any */
    extractor_type?: string
    /** Method of extraction */
    extractor_method: number
    /** Thumbnail or preview image URL */
    image: string
    /** Display identifier of the video */
    display_id: string
    /** Available video/audio formats */
    formats: Format[]
    /** Duration of the video in seconds */
    duration: number
    /** Uploader or channel name */
    uploader: string
    /** Category of the video, if any */
    category: string | null
    /** Whether audio should be merged with video */
    forceMergeAudio: boolean
    /** Indicates if the video is a livestream */
    is_live: boolean | null
    /** Preferred download method ID */
    preferred_dl: number
    /** Available subtitles, if any */
    subtitles?: {
        closed: null
        auto: Record<string, Subtitle>
    }
    /** Chapters data, if any */
    chapters?: Chapter[] | null
    /** Optional rating or ranking score */
    r?: number
}

/**
 * Represents the response format for a video parsing request.
 */
interface ParseResponse
{
    /** Indicates whether the request was successful */
    success: boolean
    /** Video data or error message */
    data: VideoData | string
    /** Error or response code */
    code: string | null
}

/**
 * Represents the response format for a license trial request.
 */
interface LicenseTrial
{
    /** Indicates whether the request was successful */
    success: boolean
    /** Trial data or error message */
    data: Data | string
    /** Error or response code */
    code: null | number
}

/**
 * Wrapper for license trial data.
 */
interface Data
{
    /** Response code */
    code: number
    /** License trial information */
    data: LicenseTrialData
}

/**
 * Detailed license trial information.
 */
interface LicenseTrialData
{
    /** Unique UUID for the client */
    uuid: string
    /** Activation key received */
    activation_key: string
    /** Unix timestamp of the license start time */
    begin_date: number
    /** License key string */
    license_key: string
    /** Unix timestamp of the license end time */
    end_date: number
    /** Type of license (e.g., trial, full) */
    license_type: number
    /** API token required for further requests */
    api_token: string
    /** Whether the license is disabled */
    disabled: boolean
}
