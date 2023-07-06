
# Quran Sharif

[![npm Version](https://img.shields.io/npm/v/quran_sharif.svg)](https://www.npmjs.com/package/quran_sharif)
![Node.js](https://img.shields.io/badge/platform-node.js-green)

A utility package for working with the Quran in JavaScript.

![Quran](https://github.com/MohamedAshraf701/quran_sharif/assets/92545354/43421462-c5e2-430d-8441-d9bfd47e9b67)

## Features

- Retrieve all surahs from the Quran.
- Get a specific surah by ID.
- Retrieve a list of surah names.
- Filter surahs by revelation type.
- Fetch ayahs by Juz ID.

## Installation

Install the package using npm:

```shell
npm install quran_sharif
```

## Usage

Import the package into your JavaScript file:

```javascript
const quran = require('quran_sharif');
```

Use the provided methods to access the Quran data:

```javascript
// Retrieve all surahs
const allSurahs = quran.getAllSurah();

// Get surah by ID
const surah = quran.getSurahById({ id: 1 });

// Get a list of surah names
const surahNames = quran.getSurahName();

// Filter surahs by revelation type
const makkiSurahs = quran.getSurahByRevelationType({ isMakki: true });

// Get ayahs by Juz ID
const juzAyahs = quran.getJuz({ id: 1 });
```

For more details on each method and its usage, refer to the API documentation.

## Examples

You can find usage examples in the [examples](https://github.com/MohamedAshraf701/npm_quran_sharif/tree/main/) folder of this repository.

## API Documentation

The API documentation for this package can be found [here](https://github.com/MohamedAshraf701/npm_quran_sharif/tree/main/).

## License

This project is licensed under the [MIT License](https://zaid.digital).

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## Author

This package is authored and maintained by [zaid.digital](https://zaid.digital).

## Get in touch

If you have any questions, feel free to reach out:

- Email: ashrafchauhan567@gmail.com
- GitHub: [@MohamedAshraf701](https://github.com/MohamedAshraf701)
