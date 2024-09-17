export interface Rates {
    errors: Error[]
    data: Data
}

export interface Data {
    rates: Rate[]
}

export interface Rate {
    title: string
    deliveryDescription: string
    trackingDescription: string
    serviceDescription: string
    pricingDescription: string
    cubicTier: null
    mailClassKey: string
    mailClass: MailClass
    packageTypeKey: string
    zone: string
    surcharges: Surcharge[]
    carrier: Carrier
    totalPrice: number
    priceBaseTypeKey: string
    basePrice: number
    crossedTotalPrice: number
    pricingType: string
    pricingSubType: string
    ratePeriodId: number
    learnMoreUrl: string
    cheapest: boolean
    fastest: boolean
    __typename: string
}

export interface Carrier {
    carrierKey: string
    title: string
    __typename: string
}

export interface MailClass {
    accuracy: null
    international: boolean
    __typename: string
}

export interface Surcharge {
    title: string
    price: number
    __typename: string
}

export interface Error {
    message: string
    locations: Location[]
    path: string[]
    extensions: Extensions
}

export interface Extensions {
    code: number
    title: string
    mailClassKey: string
    packageTypeKey: string
}

export interface Location {
    line: number
    column: number
}

export interface ShippingOptions {
    originZip: string
    originCity: string
    originRegionCode: string
    isResidential: boolean
    destinationZip: string
    destinationCountryCode: string
    mailClassKeys: string[]
    packageTypeKeys: string[]
    weight: number
    dimensionX: number
    dimensionY: number
    showUpsRatesWhen2x7Selected: boolean
}
