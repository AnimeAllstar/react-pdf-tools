<p align="center"><img src="https://user-images.githubusercontent.com/39626451/148492773-718ecfc0-c859-4f5d-9763-781b8d72a157.png" alt="React PDF Tools icon" height="60" /></p>

<h1 align="center">React PDF Tools</h1>
<p align="center">A free, fast and easy to use way to manipulate PDF files client-side.</p>

## Why?

I run a windows laptop that doesn't have an in-built way to merge/manipulate pdfs. I usually use [ilovepdf](https://www.ilovepdf.com) to manipulate pdfs but although it is "free", it has a few caveats:

- It is **slow**: Merging PDFs takes way too much when you have many PDFs because the files are uploaded to a server rather than merged client-side.
- It is not entirely **"free"**: the free version of ilovepdf has a limit of 100 MB and 25 files for a merging a PDF, which is enough for most use cases but not all. You need a premium subscription to manipulate large/many files. Many tools like 'WORD to PDF' have limits as low as 15 MB.

React PDF Tools aims to combat these limitations  by providing users with a free, fast and easy to use way to manipulate PDF files client-side. It is open-source, has no pesky file size/quantity limitations  and is much much faster.

## Current features

- [Merge PDFs](https://reactpdftools.netlify.app/merge)

## Live At

[reactpdftools.netlify.app](https://reactpdftools.netlify.app) - deployed using [netlify](https://www.netlify.com).

## How to install

- Install [Node](https://nodejs.org) `>=16.13.1`.
- Run `npm install` to install dependancies

## Available Scripts

In the project directory, you can run:

- `npm start` - runs the app in the development mode at [localhost:3000](http://localhost:3000).
- `npm test` - launches the test runner in the interactive watch mode.
- `npm run build` - builds the app for production to the `build` folder.

## Built With

- [React](https://reactjs.org) - used to create UI
- [PDF-LIB](https://pdf-lib.js.org) - used to manipulate PDFs
- [@dropzone-ui/react](https://www.npmjs.com/package/@dropzone-ui/react) - used to upload PDFs

## Contributing

Create an issue or make a pull request for any bugs, feature requests or improvements. Let's make React PDF Tools better together!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Credits

- React PDF Tools icon made by [Freepik](https://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com)
