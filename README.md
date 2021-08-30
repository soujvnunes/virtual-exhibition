# UFAL 60 anos

Web application to present a virtual exbition about UFAL's brazilian university lifetime.

[TOCM]

[TOC]

## User Interface

Dark or light version for both mobile and desktop user screen viewports. For example:

![flow01](https://github.com/soujvnunes/ufal-60-anos/blob/master/doc/flow01.png?raw=true)
![flow02](https://github.com/soujvnunes/ufal-60-anos/blob/master/doc/flow02.png?raw=true)

> [See mobile dark version live.](https://xd.adobe.com/view/4f184c01-63f3-43ab-aab8-6553abbcd773-1a4b/?fullscreen)

> [See mobile light version live.](https://xd.adobe.com/view/9ded0a7a-c266-43dd-b931-3ef6dfec5107-c8be/?fullscreen)

> [See desktop dark version live.](https://xd.adobe.com/view/4a247176-541d-4596-bba9-bb436c546ec9-1f77/?fullscreen)

> [See desktop light version live.](https://xd.adobe.com/view/ddfd67dc-1adc-401b-83d4-36eb05719541-88ae/?fullscreen)

## Guidelines

The guidelines is presented on this Behance project.

> [Visit the project.](https://www.behance.net/gallery/116828869/UFAL-60-Anos)

## Documentation

### Style

The app is styled with pre-processed classes each one identifying the current css prop followed with its desired value.

_The default unit value is **rem** (reference to the font size of the root element), but another value, such as with **px** or **em** will be specified if not use this default._

> _The motivation of styling this way instead of by component is to avoid repeated css properties in different classes. It is hard to maintain, because each class should be added during the app development according of its necessity, avoiding unused ones. This, aligned with other good front-end development practices, helps in gains in performance for user-end. Reference for this is the utility-first CSS framework [tailwindcss](https://tailwindcss.com/)!_

| Filter         | Property         | Value                    | Class name  |
| -------------- | ---------------- | ------------------------ | ----------- |
| **Layout**     | box-sizing       | border-box               | `.bs-bb`    |
|                |                  | inherit                  | `.bs-i`     |
|                | display          | flex                     | `.d-f`      |
|                | flex-direction   | column                   | `.fd-c`     |
|                | margin           | 0                        | `.m-0`      |
|                | margin           | 0 auto                   | `.m-0a`     |
|                | min-height       | 100vh                    | `.mh-100vh` |
|                | max-width        | 0                        | `.mw-0`     |
|                |                  | 20rem                    | `.mw-20`    |
|                |                  | 30rem                    | `.mw-30`    |
|                |                  | 60rem                    | `.mw-60`    |
|                |                  | 120rem                   | `.mw-120`   |
|                | padding-left     | 1                        | `.pl-1`     |
|                | padding-right    | 1                        | `.pr-1`     |
| **Text**       | font-family      | futura-pt                | `.ff-f`     |
|                | text-size-adjust | 100%                     | `.tsa-100%` |
| **Appearence** | background-color | #0e0e0e                  | `.bg-b100%` |
|                |                  | #f5f5f5                  | `.bg-w100%` |
|                | color            | #fff                     | `.c-w100%`  |
|                |                  | rgba(255, 255, 255, 0.8) | `.c-w80%`   |
|                |                  | rgba(255, 255, 255, 0.6) | `.c-w60%`   |
|                |                  | rgba(255, 255, 255, 0.4) | `.c-w40%`   |
|                |                  | rgba(255, 255, 255, 0.2) | `.c-w20%`   |
|                |                  | #333                     | `.c-b100%`  |
|                |                  | rgba(51, 51, 51, 0.8)    | `.c-b80%`   |
|                |                  | rgba(51, 51, 51, 0.6)    | `.c-b60%`   |
|                |                  | rgba(51, 51, 51, 0.4)    | `.c-b40%`   |
|                |                  | rgba(51, 51, 51, 0.2)    | `.c-b20%`   |
| **Other**      | font-smoothing   | subpixel-antialiased     | `.fs-sa`    |
|                |                  | auto                     | `.fs-a`     |
|                |                  | grayscale                | `.fs-g`     |
|                | text-rendering   | optimizeLegibility       | `.tr-ol`    |
