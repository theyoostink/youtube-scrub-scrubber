# Youtube Scrub Scrubber Extension

## Installation Instructions

1. Get the latest version from the [releases](https://github.com/theyoostink/youtube-scrub-scrubber/releases) page and download the `Source code (zip)` from the latest release under Assets. The contents of that zip should have `background.js`, `content.js`, and `manifest.json` at minimum.
2. Open your browser's `Manage Extensions` page. For example, Google Chrome's page is `chrome://extensions/` which you can enter in the Google Chrome address bar.
3. Load the extension by clicking on the `Load unpacked` button on the top left.
4. Select the folder from Step 1 that holds `background.js`, `content.js`, and `manifest.json`.
5. The extension should now be loaded into your browser. Make sure the extension is enabled.
6. Visit Youtube and those videos with few views will be blurred out! You can hover over the video to unblur it.
7. You can manage the extension like any other extension. You can disable and remove the extension as needed.
8. To update to the latest version of the extension, remove/delete the extension and repeat the steps starting with Step 1 using the latest version of the code.

## About the Extension

This extension blurs out videos on the Youtube front page with less than 1,000 views (the view counter does not have K or M or B), live streams, mixes, and auto-dubbed videos. You can hover over the video to unblur it and see the underlying text.

If you encounter a bug or would like to request changes, please contact Yoostink.

There are currently no plans to publish this extension to the Google Web Store.

## Changelog

- v1.0 [2024-07-22]: The first version
- v1.1 [2024-07-24]: Checks to blur/unblur continuously while on the page rather than just once given how Youtube renders their page
- v1.2 [2024-08-05]: Also blurs out live streams + some refactoring
- v1.3 [2024-08-05]: Also blurs out mixes
- v1.4 [2025-01-17]: Also blurs out auto-dubbed videos that are originally in another language and automatically but terribly dubbed over with a mechanical voice
- v1.5 [2025-08-07]: Handling new Youtube frontend and updating selectors and blurring more categories