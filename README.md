# Pirateship API ![NPM License]

[![License](https://img.shields.io/npm/l/pirateship-api)](https://github.com/kcoderhtml/pirateship-api/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/pirateship-api)](https://www.npmjs.com/package/pirateship-api)
![GitHub repo size](https://img.shields.io/github/repo-size/kcoderhtml/grolf)
![GitHub last commit](https://img.shields.io/github/last-commit/kcoderhtml/grolf)
![Hours spent working on this](https://waka.hackclub.com/api/badge/krn/interval:any/project:pirateship-api)
---


<img align="right" width="75" height="75" src="https://cdn.prod.website-files.com/6373a03c7d7cb73ba2df4f8e/63cebd814ad20b37f1293666_ARRrrrmoji%20Template%20168.png">

An unoffical typed wrapper for the PirateShip API.

## Installation

```bash
bun i pirateship-api
```

# Usage

```ts
import { fetchShippingRates } from "pirateship-api";

const options: ShippingOptions = {
  originZip: "20001",
  originCity: "Washington",
  originRegionCode: "DC",
  isResidential: true,
  destinationZip: "90028",
  destinationCountryCode: "US",
  mailClassKeys: [
    "PriorityExpress",
    "First",
    "ParcelSelect",
    "Priority",
  ],
  packageTypeKeys: ["SoftEnvelope"],
  weight: 14,
  dimensionX: 9,
  dimensionY: 10,
  showUpsRatesWhen2x7Selected: true,
};

const rates = await fetchShippingRates(options);
console.log(rates.map((rate) => rate.title + " - " + rate.carrier.title + " - $" + rate.totalPrice));
```

Running the above code will output the following:

```ts
[ "Priority Mail - USPS - $10.07", "Priority Mail Express - USPS - $47.25" ]
```

This is a work in progress and the types are accurate as of 2024-09-17 but can't be guaranteed to be 100% correct as this is an undocumented internal API.