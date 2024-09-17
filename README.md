# Pirateship API

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