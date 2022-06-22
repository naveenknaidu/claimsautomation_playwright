import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 0,
    retries: 0,
    testDir: 'tests',
    reporter: 'html',
    use: {
        headless: false,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off",
        
    },
    projects: [
        {
            name: 'Chromium',
            use: {browserName: 'chromium'},
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'},
        },
        {
            name: 'Webkit',
            use:{browserName:'webkit'},
        },
    ],
}

export default config
