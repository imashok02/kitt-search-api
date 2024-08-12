import { Body, Controller, Get, Query } from '@nestjs/common';
import * as Amadeus from 'amadeus';

@Controller('')
export class AmadeusController {
  AMEDEUS_SETUP = new Amadeus({
    clientId: 'ZdAeyPd3lQBFBfAhcHT7Z4TTQ3fi35fH',
    clientSecret: 'mOt4OFw7hap6UGfy',
  });

  @Get('hello')
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('date')
  async getDate(@Query() dateQuery) {
    console.log('incoming dateQuery ===> ', dateQuery);
    const departure = dateQuery.departure;
    // const arrival = dateQuery.arrival;
    const locationDeparture = dateQuery.locationDeparture;
    const locationArrival = dateQuery.locationArrival;
    // const response = await this.AMEDEUS_SETUP.shopping.flightOffersSearch
    //   .get({
    //     originLocationCode: locationDeparture,
    //     destinationLocationCode: locationArrival,
    //     departureDate: departure,
    //     adults: '1',
    //   })
    //   .catch((err) => console.log(err));
    // try {
    // //   console.log('resposne from date ==> ', response.body);
    // //   return response.body;
    // } catch (err) {
    //   console.log('resposne from date error  ==> ', response);
    // }

    return {
        "meta": {
            "count": 85,
            "links": {
                "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=LAX&departureDate=2024-08-20&adults=1"
            }
        },
        "data": [
            {
                "type": "flight-offer",
                "id": "1",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT31H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T17:50:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2024-08-20T21:00:00"
                                },
                                "carrierCode": "AV",
                                "number": "11",
                                "aircraft": {
                                    "code": "788"
                                },
                                "duration": "PT10H10M",
                                "id": "143",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2024-08-21T03:59:00"
                                },
                                "arrival": {
                                    "iataCode": "SAL",
                                    "at": "2024-08-21T05:54:00"
                                },
                                "carrierCode": "AV",
                                "number": "366",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "duration": "PT2H55M",
                                "id": "144",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SAL",
                                    "at": "2024-08-21T12:05:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-21T16:30:00"
                                },
                                "carrierCode": "AV",
                                "number": "524",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "duration": "PT5H25M",
                                "id": "145",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "730.01",
                    "base": "667.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "730.01",
                    "additionalServices": [
                        {
                            "amount": "100.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "730.01",
                            "base": "667.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "143",
                                "cabin": "ECONOMY",
                                "fareBasis": "TEOB3BR9",
                                "brandedFare": "FLEX",
                                "brandedFareLabel": "FLEX",
                                "class": "T",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "2ND CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "3RD CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": false,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "AIRPORT CHECK IN COUNTER",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "144",
                                "cabin": "ECONOMY",
                                "fareBasis": "TEOB3BR9",
                                "brandedFare": "FLEX",
                                "brandedFareLabel": "FLEX",
                                "class": "T",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "2ND CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "3RD CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": false,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "AIRPORT CHECK IN COUNTER",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "145",
                                "cabin": "ECONOMY",
                                "fareBasis": "UEOB3GR9",
                                "brandedFare": "FLEX",
                                "brandedFareLabel": "FLEX",
                                "class": "U",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "2ND CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "3RD CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": false,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "AIRPORT CHECK IN COUNTER",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "2",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 4,
                "itineraries": [
                    {
                        "duration": "PT26H8M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:35:00"
                                },
                                "arrival": {
                                    "iataCode": "LIS",
                                    "terminal": "1",
                                    "at": "2024-08-20T06:50:00"
                                },
                                "carrierCode": "TP",
                                "number": "1023",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "TP"
                                },
                                "duration": "PT1H15M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "LIS",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BOS",
                                    "terminal": "E",
                                    "at": "2024-08-20T14:10:00"
                                },
                                "carrierCode": "TP",
                                "number": "217",
                                "aircraft": {
                                    "code": "32Q"
                                },
                                "operating": {
                                    "carrierCode": "TP"
                                },
                                "duration": "PT7H25M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOS",
                                    "terminal": "C",
                                    "at": "2024-08-20T20:25:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "3",
                                    "at": "2024-08-20T23:43:00"
                                },
                                "carrierCode": "TP",
                                "number": "4329",
                                "aircraft": {
                                    "code": "32S"
                                },
                                "operating": {
                                    "carrierCode": "B6"
                                },
                                "duration": "PT6H18M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "827.89",
                    "base": "664.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "827.89"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "TP"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "827.89",
                            "base": "664.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "AH0DSI05",
                                "brandedFare": "DISCOUNT",
                                "brandedFareLabel": "DISCOUNT",
                                "class": "A",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST BAG UP TO 23KG AND 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG UP TO 23KG AND158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EXTRA LEG ROOM OR FRONT SEAT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL 1",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "AH0DSI05",
                                "brandedFare": "DISCOUNT",
                                "brandedFareLabel": "DISCOUNT",
                                "class": "A",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST BAG UP TO 23KG AND 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG UP TO 23KG AND158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EXTRA LEG ROOM OR FRONT SEAT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL 1",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "AH0DSI05",
                                "brandedFare": "DISCOUNT",
                                "brandedFareLabel": "DISCOUNT",
                                "class": "A",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST BAG UP TO 23KG AND 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG UP TO 23KG AND158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EXTRA LEG ROOM OR FRONT SEAT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL 1",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "3",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT18H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "at": "2024-08-20T13:00:00"
                                },
                                "arrival": {
                                    "iataCode": "JFK",
                                    "at": "2024-08-20T16:00:00"
                                },
                                "carrierCode": "6X",
                                "number": "9829",
                                "aircraft": {
                                    "code": "777"
                                },
                                "operating": {
                                    "carrierCode": "6X"
                                },
                                "duration": "PT9H",
                                "id": "99",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "JFK",
                                    "at": "2024-08-20T19:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "at": "2024-08-20T22:30:00"
                                },
                                "carrierCode": "6X",
                                "number": "9809",
                                "aircraft": {
                                    "code": "744"
                                },
                                "operating": {
                                    "carrierCode": "7X"
                                },
                                "duration": "PT6H30M",
                                "id": "100",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "836.81",
                    "base": "770.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "836.81"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "6X"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "836.81",
                            "base": "770.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "99",
                                "cabin": "ECONOMY",
                                "fareBasis": "BMADNYC",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            },
                            {
                                "segmentId": "100",
                                "cabin": "ECONOMY",
                                "fareBasis": "YBARRIER",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "4",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-14",
                "lastTicketingDateTime": "2024-08-14",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT32H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T15:30:00"
                                },
                                "arrival": {
                                    "iataCode": "WAW",
                                    "at": "2024-08-20T19:05:00"
                                },
                                "carrierCode": "LO",
                                "number": "434",
                                "aircraft": {
                                    "code": "73H"
                                },
                                "operating": {
                                    "carrierCode": "LO"
                                },
                                "duration": "PT3H35M",
                                "id": "36",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "WAW",
                                    "at": "2024-08-21T11:10:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-21T14:35:00"
                                },
                                "carrierCode": "LO",
                                "number": "21",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "LO"
                                },
                                "duration": "PT12H25M",
                                "id": "37",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "872.44",
                    "base": "683.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "872.44",
                    "additionalServices": [
                        {
                            "amount": "75.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LO"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "872.44",
                            "base": "683.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "36",
                                "cabin": "ECONOMY",
                                "fareBasis": "H1A0ENB",
                                "brandedFare": "ECONOBAG",
                                "brandedFareLabel": "ECONOMY NO BAG",
                                "class": "H",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1 ST CHECKED BAG UP TO 23KG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREPAID TO 23KG OR EXC DIM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "HOT DINNER",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "COMPLIMENTARY FOOD AND BEV",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE MEAL",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "H1A0ENB",
                                "brandedFare": "ECONOBAG",
                                "brandedFareLabel": "ECONOMY NO BAG",
                                "class": "H",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1 ST CHECKED BAG UP TO 23KG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREPAID TO 23KG OR EXC DIM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "HOT DINNER",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "COMPLIMENTARY FOOD AND BEV",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE MEAL",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "5",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-14",
                "lastTicketingDateTime": "2024-08-14",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:30:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "LH",
                                "number": "1123",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "82",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T14:05:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T16:55:00"
                                },
                                "carrierCode": "DE",
                                "number": "2080",
                                "aircraft": {
                                    "code": "339"
                                },
                                "operating": {
                                    "carrierCode": "DE"
                                },
                                "duration": "PT11H50M",
                                "id": "83",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "923.00",
                    "base": "779.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "923.00"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "DE"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "923.00",
                            "base": "779.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "82",
                                "cabin": "ECONOMY",
                                "fareBasis": "AHQW",
                                "class": "V",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "83",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "AHQW",
                                "class": "A",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "6",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-14",
                "lastTicketingDateTime": "2024-08-14",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT19H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:10:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:40:00"
                                },
                                "carrierCode": "LH",
                                "number": "1121",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "159",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T14:05:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T16:55:00"
                                },
                                "carrierCode": "DE",
                                "number": "2080",
                                "aircraft": {
                                    "code": "339"
                                },
                                "operating": {
                                    "carrierCode": "DE"
                                },
                                "duration": "PT11H50M",
                                "id": "160",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "923.00",
                    "base": "779.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "923.00"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "DE"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "923.00",
                            "base": "779.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "159",
                                "cabin": "ECONOMY",
                                "fareBasis": "AHQW",
                                "class": "V",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "160",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "AHQW",
                                "class": "A",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "7",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 1,
                "itineraries": [
                    {
                        "duration": "PT19H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T07:35:00"
                                },
                                "arrival": {
                                    "iataCode": "DUB",
                                    "terminal": "1",
                                    "at": "2024-08-20T09:05:00"
                                },
                                "carrierCode": "EI",
                                "number": "5792",
                                "aircraft": {
                                    "code": "32A"
                                },
                                "operating": {
                                    "carrierCode": "I2"
                                },
                                "duration": "PT2H30M",
                                "id": "189",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "DUB",
                                    "terminal": "2",
                                    "at": "2024-08-20T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T18:30:00"
                                },
                                "carrierCode": "EI",
                                "number": "69",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "EI"
                                },
                                "duration": "PT11H5M",
                                "id": "190",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1004.89",
                    "base": "799.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1004.89"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "EI"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1004.89",
                            "base": "799.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "189",
                                "cabin": "ECONOMY",
                                "fareBasis": "GEUOW23G",
                                "class": "G",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            },
                            {
                                "segmentId": "190",
                                "cabin": "ECONOMY",
                                "fareBasis": "LH1FIEGD",
                                "class": "L",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "8",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 4,
                "itineraries": [
                    {
                        "duration": "PT28H6M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T16:20:00"
                                },
                                "arrival": {
                                    "iataCode": "LIS",
                                    "terminal": "1",
                                    "at": "2024-08-20T16:40:00"
                                },
                                "carrierCode": "TP",
                                "number": "1015",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "operating": {
                                    "carrierCode": "TP"
                                },
                                "duration": "PT1H20M",
                                "id": "40",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "LIS",
                                    "terminal": "1",
                                    "at": "2024-08-20T18:15:00"
                                },
                                "arrival": {
                                    "iataCode": "EWR",
                                    "terminal": "B",
                                    "at": "2024-08-20T21:15:00"
                                },
                                "carrierCode": "TP",
                                "number": "203",
                                "aircraft": {
                                    "code": "332"
                                },
                                "operating": {
                                    "carrierCode": "TP"
                                },
                                "duration": "PT8H",
                                "id": "41",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "EWR",
                                    "terminal": "A",
                                    "at": "2024-08-21T08:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "5",
                                    "at": "2024-08-21T11:26:00"
                                },
                                "carrierCode": "TP",
                                "number": "4547",
                                "aircraft": {
                                    "code": "32S"
                                },
                                "operating": {
                                    "carrierCode": "B6"
                                },
                                "duration": "PT5H56M",
                                "id": "42",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1005.89",
                    "base": "842.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1005.89"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "TP"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1005.89",
                            "base": "842.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "WH0DSI05",
                                "brandedFare": "DISCOUNT",
                                "brandedFareLabel": "DISCOUNT",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST BAG UP TO 23KG AND 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG UP TO 23KG AND158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EXTRA LEG ROOM OR FRONT SEAT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL 1",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "WH0DSI05",
                                "brandedFare": "DISCOUNT",
                                "brandedFareLabel": "DISCOUNT",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST BAG UP TO 23KG AND 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG UP TO 23KG AND158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EXTRA LEG ROOM OR FRONT SEAT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL 1",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "WH0DSI05",
                                "brandedFare": "DISCOUNT",
                                "brandedFareLabel": "DISCOUNT",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST BAG UP TO 23KG AND 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG UP TO 23KG AND158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EXTRA LEG ROOM OR FRONT SEAT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL 1",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "9",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4",
                                    "at": "2024-08-20T10:40:00"
                                },
                                "arrival": {
                                    "iataCode": "DUB",
                                    "terminal": "2",
                                    "at": "2024-08-20T12:15:00"
                                },
                                "carrierCode": "EI",
                                "number": "593",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "EI"
                                },
                                "duration": "PT2H35M",
                                "id": "176",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "DUB",
                                    "terminal": "2",
                                    "at": "2024-08-20T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T18:30:00"
                                },
                                "carrierCode": "EI",
                                "number": "69",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "EI"
                                },
                                "duration": "PT11H5M",
                                "id": "177",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1030.89",
                    "base": "825.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1030.89"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "EI"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1030.89",
                            "base": "825.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "176",
                                "cabin": "ECONOMY",
                                "fareBasis": "ZEUOW23G",
                                "class": "Z",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            },
                            {
                                "segmentId": "177",
                                "cabin": "ECONOMY",
                                "fareBasis": "LH1FIEGD",
                                "class": "L",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "10",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-14",
                "lastTicketingDateTime": "2024-08-14",
                "numberOfBookableSeats": 3,
                "itineraries": [
                    {
                        "duration": "PT18H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T07:10:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "2",
                                    "at": "2024-08-20T09:50:00"
                                },
                                "carrierCode": "UX",
                                "number": "1503",
                                "aircraft": {
                                    "code": "7S8"
                                },
                                "operating": {
                                    "carrierCode": "UX"
                                },
                                "duration": "PT2H40M",
                                "id": "157",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T14:05:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T16:55:00"
                                },
                                "carrierCode": "DE",
                                "number": "2080",
                                "aircraft": {
                                    "code": "339"
                                },
                                "operating": {
                                    "carrierCode": "DE"
                                },
                                "duration": "PT11H50M",
                                "id": "158",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1078.00",
                    "base": "779.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1078.00"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "DE"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1078.00",
                            "base": "779.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "157",
                                "cabin": "ECONOMY",
                                "fareBasis": "AHQW",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            },
                            {
                                "segmentId": "158",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "AHQW",
                                "class": "A",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "11",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "at": "2024-08-20T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "JFK",
                                    "at": "2024-08-20T17:00:00"
                                },
                                "carrierCode": "6X",
                                "number": "9815",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "6X"
                                },
                                "duration": "PT8H",
                                "id": "97",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "JFK",
                                    "at": "2024-08-20T19:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "at": "2024-08-20T22:30:00"
                                },
                                "carrierCode": "6X",
                                "number": "9809",
                                "aircraft": {
                                    "code": "744"
                                },
                                "operating": {
                                    "carrierCode": "7X"
                                },
                                "duration": "PT6H30M",
                                "id": "98",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1136.81",
                    "base": "1070.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1136.81"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "6X"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1136.81",
                            "base": "1070.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "97",
                                "cabin": "ECONOMY",
                                "fareBasis": "YMADNYC",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            },
                            {
                                "segmentId": "98",
                                "cabin": "ECONOMY",
                                "fareBasis": "YBARRIER",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "12",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT26H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T18:45:00"
                                },
                                "arrival": {
                                    "iataCode": "IST",
                                    "at": "2024-08-20T23:55:00"
                                },
                                "carrierCode": "TK",
                                "number": "1860",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "TK"
                                },
                                "duration": "PT4H10M",
                                "id": "32",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IST",
                                    "at": "2024-08-21T08:10:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-21T11:50:00"
                                },
                                "carrierCode": "TK",
                                "number": "179",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "TK"
                                },
                                "duration": "PT13H40M",
                                "id": "33",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1236.12",
                    "base": "915.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1236.12"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TK"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1236.12",
                            "base": "915.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "32",
                                "cabin": "ECONOMY",
                                "fareBasis": "MN2XOX",
                                "brandedFare": "FX",
                                "brandedFareLabel": "FLEXIBLE",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "BAG INCLUDED",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL SERVICE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDART SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ONLINE MESSAGE RIGHT",
                                        "isChargeable": false,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FRONT SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "MN2XOX",
                                "brandedFare": "FX",
                                "brandedFareLabel": "FLEXIBLE",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "BAG INCLUDED",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL SERVICE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDART SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ONLINE MESSAGE RIGHT",
                                        "isChargeable": false,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FRONT SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "13",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT30H20M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T14:30:00"
                                },
                                "arrival": {
                                    "iataCode": "IST",
                                    "at": "2024-08-20T19:45:00"
                                },
                                "carrierCode": "TK",
                                "number": "1358",
                                "aircraft": {
                                    "code": "32Q"
                                },
                                "operating": {
                                    "carrierCode": "TK"
                                },
                                "duration": "PT4H15M",
                                "id": "70",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IST",
                                    "at": "2024-08-21T08:10:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-21T11:50:00"
                                },
                                "carrierCode": "TK",
                                "number": "179",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "TK"
                                },
                                "duration": "PT13H40M",
                                "id": "71",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1236.12",
                    "base": "915.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1236.12"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TK"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1236.12",
                            "base": "915.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "70",
                                "cabin": "ECONOMY",
                                "fareBasis": "MN2XOX",
                                "brandedFare": "FX",
                                "brandedFareLabel": "FLEXIBLE",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "BAG INCLUDED",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL SERVICE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDART SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ONLINE MESSAGE RIGHT",
                                        "isChargeable": false,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FRONT SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "71",
                                "cabin": "ECONOMY",
                                "fareBasis": "MN2XOX",
                                "brandedFare": "FX",
                                "brandedFareLabel": "FLEXIBLE",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "BAG INCLUDED",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL SERVICE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDART SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ONLINE MESSAGE RIGHT",
                                        "isChargeable": false,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FRONT SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "14",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H58M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:15:00"
                                },
                                "arrival": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T13:50:00"
                                },
                                "carrierCode": "UA",
                                "number": "261",
                                "aircraft": {
                                    "code": "764"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H35M",
                                "id": "194",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T17:48:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T20:13:00"
                                },
                                "carrierCode": "UA",
                                "number": "2276",
                                "aircraft": {
                                    "code": "777"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H25M",
                                "id": "195",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1305.31",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1305.31"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1305.31",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "194",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "195",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "15",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT18H42M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:50:00"
                                },
                                "arrival": {
                                    "iataCode": "EWR",
                                    "terminal": "B",
                                    "at": "2024-08-20T13:15:00"
                                },
                                "carrierCode": "UA",
                                "number": "50",
                                "aircraft": {
                                    "code": "764"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H25M",
                                "id": "146",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T17:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T20:32:00"
                                },
                                "carrierCode": "UA",
                                "number": "1651",
                                "aircraft": {
                                    "code": "752"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT6H2M",
                                "id": "147",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1305.31",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1305.31"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1305.31",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "146",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "147",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "16",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT19H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:15:00"
                                },
                                "arrival": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T13:50:00"
                                },
                                "carrierCode": "UA",
                                "number": "261",
                                "aircraft": {
                                    "code": "764"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H35M",
                                "id": "138",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T19:22:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T21:55:00"
                                },
                                "carrierCode": "UA",
                                "number": "2303",
                                "aircraft": {
                                    "code": "7M9"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H33M",
                                "id": "139",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1305.31",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1305.31"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1305.31",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "138",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "139",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "17",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H35M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:05:00"
                                },
                                "carrierCode": "UA",
                                "number": "8355",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT8H20M",
                                "id": "114",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T18:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "6",
                                    "at": "2024-08-20T20:20:00"
                                },
                                "carrierCode": "UA",
                                "number": "8385",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT5H20M",
                                "id": "115",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1305.42",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1305.42"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1305.42",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "114",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "115",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "18",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT19H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:05:00"
                                },
                                "carrierCode": "UA",
                                "number": "8355",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT8H20M",
                                "id": "28",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T20:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "6",
                                    "at": "2024-08-20T22:50:00"
                                },
                                "carrierCode": "UA",
                                "number": "8323",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT5H20M",
                                "id": "29",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1305.42",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1305.42"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1305.42",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "29",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "19",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:05:00"
                                },
                                "carrierCode": "AC",
                                "number": "825",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT8H20M",
                                "id": "153",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T18:10:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "6",
                                    "at": "2024-08-20T20:30:00"
                                },
                                "carrierCode": "AC",
                                "number": "793",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT5H20M",
                                "id": "154",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1305.42",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1305.42"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AC"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1305.42",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "153",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BASIC",
                                "brandedFareLabel": "BASIC",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHECKED BAG SECOND",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "COMPLIMENTARY MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BASIC SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "154",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BASIC",
                                "brandedFareLabel": "BASIC",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHECKED BAG SECOND",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "COMPLIMENTARY MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BASIC SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "20",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT19H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:05:00"
                                },
                                "carrierCode": "AC",
                                "number": "825",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT8H20M",
                                "id": "30",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T20:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "6",
                                    "at": "2024-08-20T22:50:00"
                                },
                                "carrierCode": "AC",
                                "number": "795",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT5H20M",
                                "id": "31",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1305.42",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1305.42"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AC"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1305.42",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "30",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BASIC",
                                "brandedFareLabel": "BASIC",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHECKED BAG SECOND",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "COMPLIMENTARY MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BASIC SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "31",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BASIC",
                                "brandedFareLabel": "BASIC",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHECKED BAG SECOND",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "COMPLIMENTARY MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BASIC SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "21",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 6,
                "itineraries": [
                    {
                        "duration": "PT17H39M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:15:00"
                                },
                                "arrival": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T13:50:00"
                                },
                                "carrierCode": "LH",
                                "number": "9401",
                                "aircraft": {
                                    "code": "764"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H35M",
                                "id": "127",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T17:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T19:54:00"
                                },
                                "carrierCode": "LH",
                                "number": "7476",
                                "aircraft": {
                                    "code": "777"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H24M",
                                "id": "128",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1322.81",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1322.81"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1322.81",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "127",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "128",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "22",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 4,
                "itineraries": [
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:05:00"
                                },
                                "carrierCode": "SN",
                                "number": "9627",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT8H20M",
                                "id": "155",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T18:10:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "6",
                                    "at": "2024-08-20T20:30:00"
                                },
                                "carrierCode": "AC",
                                "number": "793",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT5H20M",
                                "id": "156",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1322.92",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1322.92"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "SN"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1322.92",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "155",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "156",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "23",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT19H9M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T08:35:00"
                                },
                                "carrierCode": "UA",
                                "number": "9956",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "SN"
                                },
                                "duration": "PT2H15M",
                                "id": "49",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T10:15:00"
                                },
                                "arrival": {
                                    "iataCode": "ORD",
                                    "terminal": "5",
                                    "at": "2024-08-20T12:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "973",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H45M",
                                "id": "50",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "ORD",
                                    "terminal": "1",
                                    "at": "2024-08-20T14:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T16:29:00"
                                },
                                "carrierCode": "UA",
                                "number": "2320",
                                "aircraft": {
                                    "code": "32Q"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT4H29M",
                                "id": "51",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1323.10",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1323.10"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1323.10",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "49",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "50",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "51",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "24",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H46M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T08:35:00"
                                },
                                "carrierCode": "UA",
                                "number": "9956",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "SN"
                                },
                                "duration": "PT2H15M",
                                "id": "163",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T10:15:00"
                                },
                                "arrival": {
                                    "iataCode": "ORD",
                                    "terminal": "5",
                                    "at": "2024-08-20T12:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "973",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H45M",
                                "id": "164",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "ORD",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:43:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T18:06:00"
                                },
                                "carrierCode": "UA",
                                "number": "453",
                                "aircraft": {
                                    "code": "753"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT4H23M",
                                "id": "165",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1323.10",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1323.10"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1323.10",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "163",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "164",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "165",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "25",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT22H9M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T08:35:00"
                                },
                                "carrierCode": "UA",
                                "number": "9956",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "SN"
                                },
                                "duration": "PT2H15M",
                                "id": "52",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T11:15:00"
                                },
                                "arrival": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T13:10:00"
                                },
                                "carrierCode": "UA",
                                "number": "998",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT7H55M",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T16:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T19:29:00"
                                },
                                "carrierCode": "UA",
                                "number": "2151",
                                "aircraft": {
                                    "code": "752"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H59M",
                                "id": "54",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1323.10",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1323.10"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1323.10",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "52",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "54",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "26",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT23H12M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T08:35:00"
                                },
                                "carrierCode": "UA",
                                "number": "9956",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "SN"
                                },
                                "duration": "PT2H15M",
                                "id": "62",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T11:15:00"
                                },
                                "arrival": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T13:10:00"
                                },
                                "carrierCode": "UA",
                                "number": "998",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT7H55M",
                                "id": "63",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T17:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T20:32:00"
                                },
                                "carrierCode": "UA",
                                "number": "1651",
                                "aircraft": {
                                    "code": "752"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT6H2M",
                                "id": "64",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1323.10",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1323.10"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1323.10",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "62",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "63",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "64",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "27",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T05:55:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:30:00"
                                },
                                "carrierCode": "UA",
                                "number": "8982",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "13",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T13:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "8845",
                                "aircraft": {
                                    "code": "74H"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT11H30M",
                                "id": "14",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1330.00",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1330.00"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1330.00",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "14",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "28",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T07:15:00"
                                },
                                "arrival": {
                                    "iataCode": "MUC",
                                    "terminal": "2",
                                    "at": "2024-08-20T09:45:00"
                                },
                                "carrierCode": "LH",
                                "number": "1807",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MUC",
                                    "terminal": "2",
                                    "at": "2024-08-20T12:20:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T15:15:00"
                                },
                                "carrierCode": "LH",
                                "number": "452",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT11H55M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1330.60",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1330.60",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1330.60",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "29",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT19H54M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:25:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "9228",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "180",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T13:35:00"
                                },
                                "arrival": {
                                    "iataCode": "SFO",
                                    "terminal": "I",
                                    "at": "2024-08-20T16:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "59",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT11H25M",
                                "id": "181",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SFO",
                                    "terminal": "3",
                                    "at": "2024-08-20T17:46:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T19:19:00"
                                },
                                "carrierCode": "UA",
                                "number": "1754",
                                "aircraft": {
                                    "code": "738"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT1H33M",
                                "id": "182",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "180",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "181",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "182",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "30",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT19H59M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T13:00:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:35:00"
                                },
                                "carrierCode": "UA",
                                "number": "9349",
                                "aircraft": {
                                    "code": "32A"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "196",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T17:20:00"
                                },
                                "arrival": {
                                    "iataCode": "ORD",
                                    "terminal": "5",
                                    "at": "2024-08-20T19:55:00"
                                },
                                "carrierCode": "UA",
                                "number": "8834",
                                "aircraft": {
                                    "code": "343"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT9H35M",
                                "id": "197",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "ORD",
                                    "terminal": "1",
                                    "at": "2024-08-20T21:31:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T23:59:00"
                                },
                                "carrierCode": "UA",
                                "number": "1641",
                                "aircraft": {
                                    "code": "739"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT4H28M",
                                "id": "198",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "196",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "197",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "198",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "31",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H28M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T13:00:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:35:00"
                                },
                                "carrierCode": "UA",
                                "number": "9349",
                                "aircraft": {
                                    "code": "32A"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "92",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T17:30:00"
                                },
                                "arrival": {
                                    "iataCode": "SFO",
                                    "terminal": "I",
                                    "at": "2024-08-20T19:55:00"
                                },
                                "carrierCode": "UA",
                                "number": "927",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT11H25M",
                                "id": "93",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SFO",
                                    "terminal": "3",
                                    "at": "2024-08-20T22:55:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-21T00:28:00"
                                },
                                "carrierCode": "UA",
                                "number": "1485",
                                "aircraft": {
                                    "code": "738"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT1H33M",
                                "id": "94",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "92",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "93",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "94",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "32",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H48M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:25:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "9228",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "166",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:20:00"
                                },
                                "arrival": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T15:15:00"
                                },
                                "carrierCode": "UA",
                                "number": "988",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H55M",
                                "id": "167",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T17:48:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T20:13:00"
                                },
                                "carrierCode": "UA",
                                "number": "2276",
                                "aircraft": {
                                    "code": "777"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H25M",
                                "id": "168",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "166",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "167",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "168",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "33",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT21H1M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:25:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "9228",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "7",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "ORD",
                                    "terminal": "5",
                                    "at": "2024-08-20T15:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "906",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT9H15M",
                                "id": "8",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "ORD",
                                    "terminal": "1",
                                    "at": "2024-08-20T17:55:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T20:26:00"
                                },
                                "carrierCode": "UA",
                                "number": "1144",
                                "aircraft": {
                                    "code": "752"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT4H31M",
                                "id": "9",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "7",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "8",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "9",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "34",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT21H3M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T05:55:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:30:00"
                                },
                                "carrierCode": "UA",
                                "number": "8982",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "10",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:25:00"
                                },
                                "arrival": {
                                    "iataCode": "SFO",
                                    "terminal": "I",
                                    "at": "2024-08-20T12:40:00"
                                },
                                "carrierCode": "UA",
                                "number": "8829",
                                "aircraft": {
                                    "code": "74H"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT11H15M",
                                "id": "11",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SFO",
                                    "terminal": "3",
                                    "at": "2024-08-20T16:25:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T17:58:00"
                                },
                                "carrierCode": "UA",
                                "number": "1413",
                                "aircraft": {
                                    "code": "7M9"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT1H33M",
                                "id": "12",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "10",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "11",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "35",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT21H7M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:25:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "9228",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T13:20:00"
                                },
                                "arrival": {
                                    "iataCode": "EWR",
                                    "terminal": "B",
                                    "at": "2024-08-20T15:40:00"
                                },
                                "carrierCode": "UA",
                                "number": "8839",
                                "aircraft": {
                                    "code": "74H"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT8H20M",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T17:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T20:32:00"
                                },
                                "carrierCode": "UA",
                                "number": "1651",
                                "aircraft": {
                                    "code": "752"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT6H2M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "36",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT21H57M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:25:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "9228",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "191",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T13:20:00"
                                },
                                "arrival": {
                                    "iataCode": "EWR",
                                    "terminal": "B",
                                    "at": "2024-08-20T15:40:00"
                                },
                                "carrierCode": "UA",
                                "number": "8839",
                                "aircraft": {
                                    "code": "74H"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT8H20M",
                                "id": "192",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T18:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T21:22:00"
                                },
                                "carrierCode": "UA",
                                "number": "435",
                                "aircraft": {
                                    "code": "777"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H52M",
                                "id": "193",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "191",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "192",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "193",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "37",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT22H34M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T05:55:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:30:00"
                                },
                                "carrierCode": "UA",
                                "number": "8982",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "105",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:10:00"
                                },
                                "arrival": {
                                    "iataCode": "EWR",
                                    "terminal": "B",
                                    "at": "2024-08-20T13:40:00"
                                },
                                "carrierCode": "UA",
                                "number": "961",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H30M",
                                "id": "106",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T16:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T19:29:00"
                                },
                                "carrierCode": "UA",
                                "number": "2151",
                                "aircraft": {
                                    "code": "752"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H59M",
                                "id": "107",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "105",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "106",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "107",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "38",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT22H39M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:25:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "9228",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "129",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "ORD",
                                    "terminal": "5",
                                    "at": "2024-08-20T15:00:00"
                                },
                                "carrierCode": "UA",
                                "number": "906",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT9H15M",
                                "id": "130",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "ORD",
                                    "terminal": "1",
                                    "at": "2024-08-20T19:35:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T22:04:00"
                                },
                                "carrierCode": "UA",
                                "number": "771",
                                "aircraft": {
                                    "code": "32Q"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT4H29M",
                                "id": "131",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "129",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "130",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "131",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "39",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT23H37M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T05:55:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:30:00"
                                },
                                "carrierCode": "UA",
                                "number": "8982",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "120",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:10:00"
                                },
                                "arrival": {
                                    "iataCode": "EWR",
                                    "terminal": "B",
                                    "at": "2024-08-20T13:40:00"
                                },
                                "carrierCode": "UA",
                                "number": "961",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H30M",
                                "id": "121",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T17:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T20:32:00"
                                },
                                "carrierCode": "UA",
                                "number": "1651",
                                "aircraft": {
                                    "code": "752"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT6H2M",
                                "id": "122",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "120",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "121",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "122",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "40",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT20H49M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T13:00:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:35:00"
                                },
                                "carrierCode": "UA",
                                "number": "9349",
                                "aircraft": {
                                    "code": "32A"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "169",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T17:10:00"
                                },
                                "arrival": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T20:05:00"
                                },
                                "carrierCode": "UA",
                                "number": "933",
                                "aircraft": {
                                    "code": "777"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H55M",
                                "id": "170",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T22:15:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-21T00:49:00"
                                },
                                "carrierCode": "UA",
                                "number": "1245",
                                "aircraft": {
                                    "code": "7M9"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H34M",
                                "id": "171",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.19",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.19"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.19",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "169",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "170",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "171",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "BE",
                                "brandedFareLabel": "BASIC ECONOMY",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "41",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT22H16M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T08:35:00"
                                },
                                "carrierCode": "SN",
                                "number": "3732",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "SN"
                                },
                                "duration": "PT2H15M",
                                "id": "67",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T10:00:00"
                                },
                                "arrival": {
                                    "iataCode": "YUL",
                                    "at": "2024-08-20T11:55:00"
                                },
                                "carrierCode": "SN",
                                "number": "9551",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT7H55M",
                                "id": "68",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "YUL",
                                    "at": "2024-08-20T16:40:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "6",
                                    "at": "2024-08-20T19:36:00"
                                },
                                "carrierCode": "SN",
                                "number": "9599",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT5H56M",
                                "id": "69",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1335.41",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1335.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "SN"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1335.41",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "67",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "68",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "69",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "42",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 4,
                "itineraries": [
                    {
                        "duration": "PT22H34M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T08:35:00"
                                },
                                "carrierCode": "SN",
                                "number": "3732",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "SN"
                                },
                                "duration": "PT2H15M",
                                "id": "108",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T10:45:00"
                                },
                                "arrival": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T13:30:00"
                                },
                                "carrierCode": "SN",
                                "number": "515",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "SN"
                                },
                                "duration": "PT8H45M",
                                "id": "109",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T17:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T19:54:00"
                                },
                                "carrierCode": "SN",
                                "number": "8813",
                                "aircraft": {
                                    "code": "777"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H24M",
                                "id": "110",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1340.60",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1340.60"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "SN"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1340.60",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "108",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "109",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "110",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "43",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 4,
                "itineraries": [
                    {
                        "duration": "PT22H34M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T08:35:00"
                                },
                                "carrierCode": "SN",
                                "number": "3732",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "SN"
                                },
                                "duration": "PT2H15M",
                                "id": "111",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BRU",
                                    "at": "2024-08-20T12:00:00"
                                },
                                "arrival": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T14:15:00"
                                },
                                "carrierCode": "SN",
                                "number": "8801",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H15M",
                                "id": "112",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IAD",
                                    "at": "2024-08-20T17:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T19:54:00"
                                },
                                "carrierCode": "SN",
                                "number": "8813",
                                "aircraft": {
                                    "code": "777"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H24M",
                                "id": "113",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1340.60",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1340.60"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "SN"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1340.60",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "111",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "112",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "113",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "44",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT15H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:10:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:40:00"
                                },
                                "carrierCode": "LH",
                                "number": "1121",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "174",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T13:00:00"
                                },
                                "carrierCode": "LH",
                                "number": "456",
                                "aircraft": {
                                    "code": "74H"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT11H30M",
                                "id": "175",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1347.50",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1347.50",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1347.50",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "174",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "175",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "45",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T13:00:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:30:00"
                                },
                                "carrierCode": "LH",
                                "number": "1113",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "3",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T19:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "at": "2024-08-20T21:00:00"
                                },
                                "carrierCode": "LH",
                                "number": "4337",
                                "aircraft": {
                                    "code": "744"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT11H",
                                "id": "4",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1347.50",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1347.50",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1347.50",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "3",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "4",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "46",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:30:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "LH",
                                "number": "1123",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "84",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T13:45:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T16:55:00"
                                },
                                "carrierCode": "LH",
                                "number": "450",
                                "aircraft": {
                                    "code": "343"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT12H10M",
                                "id": "85",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1347.50",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1347.50",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1347.50",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "84",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "85",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "47",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT19H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:10:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:40:00"
                                },
                                "carrierCode": "LH",
                                "number": "1121",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "161",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T13:45:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T16:55:00"
                                },
                                "carrierCode": "LH",
                                "number": "450",
                                "aircraft": {
                                    "code": "343"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT12H10M",
                                "id": "162",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1347.50",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1347.50",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1347.50",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "161",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "162",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "48",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT21H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:30:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "LH",
                                "number": "1123",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "101",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T19:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "at": "2024-08-20T21:00:00"
                                },
                                "carrierCode": "LH",
                                "number": "4550",
                                "aircraft": {
                                    "code": "744"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT11H",
                                "id": "102",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1347.50",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1347.50",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1347.50",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "101",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "102",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "49",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT28H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T15:55:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T18:30:00"
                                },
                                "carrierCode": "LH",
                                "number": "1115",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H35M",
                                "id": "34",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T23:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "at": "2024-08-21T11:00:00"
                                },
                                "carrierCode": "LH",
                                "number": "4789",
                                "aircraft": {
                                    "code": "744"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT20H30M",
                                "id": "35",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1347.50",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1347.50",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1347.50",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "35",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "50",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 6,
                "itineraries": [
                    {
                        "duration": "PT22H23M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T08:30:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "carrierCode": "LH",
                                "number": "1123",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "74",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "ORD",
                                    "terminal": "5",
                                    "at": "2024-08-20T15:00:00"
                                },
                                "carrierCode": "LH",
                                "number": "9150",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT9H15M",
                                "id": "75",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "ORD",
                                    "terminal": "1",
                                    "at": "2024-08-20T19:35:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T21:53:00"
                                },
                                "carrierCode": "LH",
                                "number": "9164",
                                "aircraft": {
                                    "code": "753"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT4H18M",
                                "id": "76",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1352.69",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1352.69"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1352.69",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "74",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "75",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "76",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "51",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 6,
                "itineraries": [
                    {
                        "duration": "PT24H43M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:10:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:40:00"
                                },
                                "carrierCode": "LH",
                                "number": "1121",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "148",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:50:00"
                                },
                                "arrival": {
                                    "iataCode": "ORD",
                                    "terminal": "5",
                                    "at": "2024-08-20T12:55:00"
                                },
                                "carrierCode": "LH",
                                "number": "430",
                                "aircraft": {
                                    "code": "74H"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT9H5M",
                                "id": "149",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "ORD",
                                    "terminal": "1",
                                    "at": "2024-08-20T19:35:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T21:53:00"
                                },
                                "carrierCode": "LH",
                                "number": "9164",
                                "aircraft": {
                                    "code": "753"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT4H18M",
                                "id": "150",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1352.69",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1352.69"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1352.69",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "148",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "149",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "150",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "52",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT18H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:10:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:40:00"
                                },
                                "carrierCode": "LH",
                                "number": "1121",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "17",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:15:00"
                                },
                                "arrival": {
                                    "iataCode": "MUC",
                                    "terminal": "2",
                                    "at": "2024-08-20T11:10:00"
                                },
                                "carrierCode": "LH",
                                "number": "100",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT55M",
                                "id": "18",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MUC",
                                    "terminal": "2",
                                    "at": "2024-08-20T12:20:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T15:15:00"
                                },
                                "carrierCode": "LH",
                                "number": "452",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT11H55M",
                                "id": "19",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1356.25",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1356.25",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1356.25",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "17",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "18",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "19",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "53",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT18H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:10:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:40:00"
                                },
                                "carrierCode": "LH",
                                "number": "1121",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "20",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:30:00"
                                },
                                "arrival": {
                                    "iataCode": "MUC",
                                    "terminal": "2",
                                    "at": "2024-08-20T11:30:00"
                                },
                                "carrierCode": "LH",
                                "number": "4301",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT1H",
                                "id": "21",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MUC",
                                    "terminal": "2",
                                    "at": "2024-08-20T12:20:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T15:15:00"
                                },
                                "carrierCode": "LH",
                                "number": "452",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT11H55M",
                                "id": "22",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1356.25",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1356.25",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1356.25",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "20",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "21",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "22",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "54",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-18",
                "lastTicketingDateTime": "2024-08-18",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT18H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:10:00"
                                },
                                "arrival": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:40:00"
                                },
                                "carrierCode": "LH",
                                "number": "1121",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT2H30M",
                                "id": "23",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FRA",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MUC",
                                    "terminal": "2",
                                    "at": "2024-08-20T10:50:00"
                                },
                                "carrierCode": "LH",
                                "number": "7027",
                                "aircraft": {
                                    "code": "319"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT50M",
                                "id": "24",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MUC",
                                    "terminal": "2",
                                    "at": "2024-08-20T12:20:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T15:15:00"
                                },
                                "carrierCode": "LH",
                                "number": "452",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "LH"
                                },
                                "duration": "PT11H55M",
                                "id": "25",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1356.25",
                    "base": "1101.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1356.25",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "LH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1356.25",
                            "base": "1101.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "23",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "24",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "25",
                                "cabin": "ECONOMY",
                                "fareBasis": "MMPMBOBQ",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG UPTO50LB23KG 62LI158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON EUROPE FLTS",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CATERING ON INTERCONT FLTS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDARD SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREFERRED SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "55",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT27H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T17:50:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2024-08-20T21:00:00"
                                },
                                "carrierCode": "AV",
                                "number": "11",
                                "aircraft": {
                                    "code": "788"
                                },
                                "duration": "PT10H10M",
                                "id": "140",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2024-08-21T03:59:00"
                                },
                                "arrival": {
                                    "iataCode": "SAL",
                                    "at": "2024-08-21T05:54:00"
                                },
                                "carrierCode": "AV",
                                "number": "366",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "duration": "PT2H55M",
                                "id": "141",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SAL",
                                    "at": "2024-08-21T08:05:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-21T12:30:00"
                                },
                                "carrierCode": "AV",
                                "number": "522",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "duration": "PT5H25M",
                                "id": "142",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1365.01",
                    "base": "1302.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1365.01",
                    "additionalServices": [
                        {
                            "amount": "110.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1365.01",
                            "base": "1302.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "140",
                                "cabin": "ECONOMY",
                                "fareBasis": "EEOB3BRR",
                                "brandedFare": "FLEX",
                                "brandedFareLabel": "FLEX",
                                "class": "E",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "2ND CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "3RD CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": false,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "AIRPORT CHECK IN COUNTER",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "141",
                                "cabin": "ECONOMY",
                                "fareBasis": "EEOB3BRS",
                                "brandedFare": "FLEX",
                                "brandedFareLabel": "FLEX",
                                "class": "E",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "2ND CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "3RD CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": false,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "AIRPORT CHECK IN COUNTER",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "142",
                                "cabin": "ECONOMY",
                                "fareBasis": "EEOB3BRS",
                                "brandedFare": "FLEX",
                                "brandedFareLabel": "FLEX",
                                "class": "E",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "2ND CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "3RD CHECKED BAG 23KG 158 LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": false,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "AIRPORT CHECK IN COUNTER",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "56",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:00:00"
                                },
                                "arrival": {
                                    "iataCode": "AMS",
                                    "at": "2024-08-20T08:25:00"
                                },
                                "carrierCode": "KL",
                                "number": "1500",
                                "aircraft": {
                                    "code": "73H"
                                },
                                "operating": {
                                    "carrierCode": "KL"
                                },
                                "duration": "PT2H25M",
                                "id": "172",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "AMS",
                                    "at": "2024-08-20T09:50:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T11:50:00"
                                },
                                "carrierCode": "KL",
                                "number": "601",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "KL"
                                },
                                "duration": "PT11H",
                                "id": "173",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1445.10",
                    "base": "1219.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1445.10",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1445.10",
                            "base": "1219.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "172",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "173",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "57",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T07:05:00"
                                },
                                "arrival": {
                                    "iataCode": "AMS",
                                    "at": "2024-08-20T09:40:00"
                                },
                                "carrierCode": "KL",
                                "number": "3390",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "UX"
                                },
                                "duration": "PT2H35M",
                                "id": "151",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "AMS",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T14:50:00"
                                },
                                "carrierCode": "KL",
                                "number": "603",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "KL"
                                },
                                "duration": "PT11H5M",
                                "id": "152",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1445.10",
                    "base": "1219.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1445.10"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1445.10",
                            "base": "1219.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "151",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "152",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "58",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T06:00:00"
                                },
                                "arrival": {
                                    "iataCode": "AMS",
                                    "at": "2024-08-20T08:25:00"
                                },
                                "carrierCode": "KL",
                                "number": "1500",
                                "aircraft": {
                                    "code": "73H"
                                },
                                "operating": {
                                    "carrierCode": "KL"
                                },
                                "duration": "PT2H25M",
                                "id": "178",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "AMS",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T14:50:00"
                                },
                                "carrierCode": "KL",
                                "number": "603",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "KL"
                                },
                                "duration": "PT11H5M",
                                "id": "179",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1445.10",
                    "base": "1219.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1445.10",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1445.10",
                            "base": "1219.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "178",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "179",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "59",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT24H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T20:20:00"
                                },
                                "arrival": {
                                    "iataCode": "AMS",
                                    "at": "2024-08-20T23:00:00"
                                },
                                "carrierCode": "KL",
                                "number": "1508",
                                "aircraft": {
                                    "code": "73J"
                                },
                                "operating": {
                                    "carrierCode": "KL"
                                },
                                "duration": "PT2H40M",
                                "id": "103",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "AMS",
                                    "at": "2024-08-21T09:50:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-21T11:50:00"
                                },
                                "carrierCode": "KL",
                                "number": "601",
                                "aircraft": {
                                    "code": "781"
                                },
                                "operating": {
                                    "carrierCode": "KL"
                                },
                                "duration": "PT11H",
                                "id": "104",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1445.10",
                    "base": "1219.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1445.10",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1445.10",
                            "base": "1219.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "103",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "104",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "60",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "at": "2024-08-20T06:00:00"
                                },
                                "arrival": {
                                    "iataCode": "CDG",
                                    "at": "2024-08-20T08:05:00"
                                },
                                "carrierCode": "AF",
                                "number": "1401",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "AF"
                                },
                                "duration": "PT2H5M",
                                "id": "15",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "CDG",
                                    "terminal": "2E",
                                    "at": "2024-08-20T10:40:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T13:05:00"
                                },
                                "carrierCode": "AF",
                                "number": "22",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "AF"
                                },
                                "duration": "PT11H25M",
                                "id": "16",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1450.05",
                    "base": "1219.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1450.05",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1450.05",
                            "base": "1219.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "61",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT18H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T12:20:00"
                                },
                                "arrival": {
                                    "iataCode": "CDG",
                                    "terminal": "2F",
                                    "at": "2024-08-20T14:25:00"
                                },
                                "carrierCode": "AF",
                                "number": "1301",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "AF"
                                },
                                "duration": "PT2H5M",
                                "id": "86",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "CDG",
                                    "at": "2024-08-20T19:25:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "at": "2024-08-20T21:45:00"
                                },
                                "carrierCode": "AF",
                                "number": "26",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "AF"
                                },
                                "duration": "PT11H20M",
                                "id": "87",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1450.05",
                    "base": "1219.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1450.05",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1450.05",
                            "base": "1219.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "86",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "87",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "62",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT19H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "at": "2024-08-20T06:00:00"
                                },
                                "arrival": {
                                    "iataCode": "CDG",
                                    "at": "2024-08-20T08:05:00"
                                },
                                "carrierCode": "AF",
                                "number": "1401",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "AF"
                                },
                                "duration": "PT2H5M",
                                "id": "26",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "CDG",
                                    "terminal": "2E",
                                    "at": "2024-08-20T13:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T16:05:00"
                                },
                                "carrierCode": "AF",
                                "number": "24",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "AF"
                                },
                                "duration": "PT11H35M",
                                "id": "27",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1450.05",
                    "base": "1219.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1450.05",
                    "additionalServices": [
                        {
                            "amount": "70.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1450.05",
                            "base": "1219.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "26",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "MYQ0BALA",
                                "brandedFare": "LIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHOICE OF STANDARD SEAT",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "63",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT35H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T14:30:00"
                                },
                                "arrival": {
                                    "iataCode": "IST",
                                    "at": "2024-08-20T19:45:00"
                                },
                                "carrierCode": "TK",
                                "number": "1358",
                                "aircraft": {
                                    "code": "32Q"
                                },
                                "operating": {
                                    "carrierCode": "TK"
                                },
                                "duration": "PT4H15M",
                                "id": "90",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "IST",
                                    "at": "2024-08-21T13:15:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-21T16:55:00"
                                },
                                "carrierCode": "TK",
                                "number": "9",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TK"
                                },
                                "duration": "PT13H40M",
                                "id": "91",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1484.12",
                    "base": "1163.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1484.12"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TK"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1484.12",
                            "base": "1163.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "90",
                                "cabin": "ECONOMY",
                                "fareBasis": "BNOW",
                                "brandedFare": "FX",
                                "brandedFareLabel": "FLEXIBLE",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "BAG INCLUDED",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL SERVICE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDART SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ONLINE MESSAGE RIGHT",
                                        "isChargeable": false,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FRONT SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "91",
                                "cabin": "ECONOMY",
                                "fareBasis": "BNOW",
                                "brandedFare": "FX",
                                "brandedFareLabel": "FLEXIBLE",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "BAG INCLUDED",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL SERVICE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "STANDART SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ONLINE MESSAGE RIGHT",
                                        "isChargeable": false,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FRONT SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "64",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 6,
                "itineraries": [
                    {
                        "duration": "PT18H12M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "arrival": {
                                    "iataCode": "ATL",
                                    "terminal": "I",
                                    "at": "2024-08-20T14:25:00"
                                },
                                "carrierCode": "VS",
                                "number": "3890",
                                "aircraft": {
                                    "code": "350"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT9H25M",
                                "id": "60",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "ATL",
                                    "terminal": "S",
                                    "at": "2024-08-20T18:25:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "3",
                                    "at": "2024-08-20T20:12:00"
                                },
                                "carrierCode": "VS",
                                "number": "5115",
                                "aircraft": {
                                    "code": "757"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT4H47M",
                                "id": "61",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1518.31",
                    "base": "1314.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1518.31"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "VS"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1518.31",
                            "base": "1314.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "60",
                                "cabin": "ECONOMY",
                                "fareBasis": "RYQ0BBSA",
                                "brandedFare": "CLASSIC",
                                "brandedFareLabel": "ECONOMY CLASSIC",
                                "class": "R",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG MAX 23KG",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCED SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEALS AND DRINKS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EARN MILES",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI",
                                        "isChargeable": true,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "61",
                                "cabin": "ECONOMY",
                                "fareBasis": "RYQ0BBSA",
                                "brandedFare": "CLASSIC",
                                "brandedFareLabel": "ECONOMY CLASSIC",
                                "class": "R",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG MAX 23KG",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCED SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEALS AND DRINKS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EARN MILES",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI",
                                        "isChargeable": true,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "65",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 6,
                "itineraries": [
                    {
                        "duration": "PT19H38M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T11:00:00"
                                },
                                "arrival": {
                                    "iataCode": "ATL",
                                    "terminal": "I",
                                    "at": "2024-08-20T14:25:00"
                                },
                                "carrierCode": "VS",
                                "number": "3890",
                                "aircraft": {
                                    "code": "350"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT9H25M",
                                "id": "123",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "ATL",
                                    "terminal": "S",
                                    "at": "2024-08-20T19:48:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "3",
                                    "at": "2024-08-20T21:38:00"
                                },
                                "carrierCode": "VS",
                                "number": "4383",
                                "aircraft": {
                                    "code": "753"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT4H50M",
                                "id": "124",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1518.31",
                    "base": "1314.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1518.31"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "VS"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1518.31",
                            "base": "1314.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "123",
                                "cabin": "ECONOMY",
                                "fareBasis": "RYQ0BBSA",
                                "brandedFare": "CLASSIC",
                                "brandedFareLabel": "ECONOMY CLASSIC",
                                "class": "R",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG MAX 23KG",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCED SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEALS AND DRINKS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EARN MILES",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI",
                                        "isChargeable": true,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "124",
                                "cabin": "ECONOMY",
                                "fareBasis": "RYQ0BBSA",
                                "brandedFare": "CLASSIC",
                                "brandedFareLabel": "ECONOMY CLASSIC",
                                "class": "R",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG MAX 23KG",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCED SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEALS AND DRINKS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EARN MILES",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI",
                                        "isChargeable": true,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "66",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-14",
                "lastTicketingDateTime": "2024-08-14",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT30H35M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:30:00"
                                },
                                "arrival": {
                                    "iataCode": "JFK",
                                    "terminal": "4",
                                    "at": "2024-08-20T17:45:00"
                                },
                                "carrierCode": "UX",
                                "number": "91",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "UX"
                                },
                                "duration": "PT8H15M",
                                "id": "118",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "JFK",
                                    "terminal": "4",
                                    "at": "2024-08-21T10:05:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "3",
                                    "at": "2024-08-21T13:05:00"
                                },
                                "carrierCode": "UX",
                                "number": "3401",
                                "aircraft": {
                                    "code": "76W"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT6H",
                                "id": "119",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1611.81",
                    "base": "1215.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1611.81"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "UX"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1611.81",
                            "base": "1215.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "118",
                                "cabin": "ECONOMY",
                                "fareBasis": "MHYOEA",
                                "brandedFare": "STANDARD",
                                "brandedFareLabel": "STANDARD",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST CHECKED BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FIRST PREPAID BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREPAID BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "119",
                                "cabin": "ECONOMY",
                                "fareBasis": "MHYOEA",
                                "brandedFare": "STANDARD",
                                "brandedFareLabel": "STANDARD",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST CHECKED BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FIRST PREPAID BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREPAID BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "67",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-14",
                "lastTicketingDateTime": "2024-08-14",
                "numberOfBookableSeats": 8,
                "itineraries": [
                    {
                        "duration": "PT15H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4",
                                    "at": "2024-08-20T11:30:00"
                                },
                                "arrival": {
                                    "iataCode": "BCN",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "carrierCode": "IB",
                                "number": "3012",
                                "aircraft": {
                                    "code": "319"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT1H15M",
                                "id": "134",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BCN",
                                    "terminal": "1",
                                    "at": "2024-08-20T14:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T18:10:00"
                                },
                                "carrierCode": "IB",
                                "number": "2623",
                                "aircraft": {
                                    "code": "332"
                                },
                                "duration": "PT13H10M",
                                "id": "135",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1675.71",
                    "base": "1605.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1675.71",
                    "additionalServices": [
                        {
                            "amount": "150.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1675.71",
                            "base": "1605.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "134",
                                "cabin": "ECONOMY",
                                "fareBasis": "YD",
                                "brandedFare": "ECOPUENTE",
                                "brandedFareLabel": "AIR SHUTTLE ECONOMY",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "SECOND CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "135",
                                "cabin": "ECONOMY",
                                "fareBasis": "LNH0NOGN",
                                "brandedFare": "OPTIMA",
                                "brandedFareLabel": "OPTIMA",
                                "class": "L",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "SECOND CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": true,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "68",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T05:50:00"
                                },
                                "arrival": {
                                    "iataCode": "FCO",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:15:00"
                                },
                                "carrierCode": "AZ",
                                "number": "59",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "operating": {
                                    "carrierCode": "AZ"
                                },
                                "duration": "PT2H25M",
                                "id": "80",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FCO",
                                    "terminal": "1",
                                    "at": "2024-08-20T09:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T13:15:00"
                                },
                                "carrierCode": "AZ",
                                "number": "620",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "AZ"
                                },
                                "duration": "PT12H45M",
                                "id": "81",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1689.26",
                    "base": "1512.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1689.26",
                    "additionalServices": [
                        {
                            "amount": "130.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AZ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1689.26",
                            "base": "1512.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "80",
                                "cabin": "ECONOMY",
                                "fareBasis": "BLGOWUE",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "UP TO 50LB 23KG 62LI 158LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCE SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL AND WINE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "81",
                                "cabin": "ECONOMY",
                                "fareBasis": "BLGOWUE",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "UP TO 50LB 23KG 62LI 158LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCE SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL AND WINE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "69",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT28H15M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T18:00:00"
                                },
                                "arrival": {
                                    "iataCode": "FCO",
                                    "terminal": "1",
                                    "at": "2024-08-20T20:25:00"
                                },
                                "carrierCode": "AZ",
                                "number": "63",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "AZ"
                                },
                                "duration": "PT2H25M",
                                "id": "65",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FCO",
                                    "terminal": "1",
                                    "at": "2024-08-21T09:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-21T13:15:00"
                                },
                                "carrierCode": "AZ",
                                "number": "620",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "AZ"
                                },
                                "duration": "PT12H45M",
                                "id": "66",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1689.26",
                    "base": "1512.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1689.26",
                    "additionalServices": [
                        {
                            "amount": "130.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AZ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1689.26",
                            "base": "1512.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "65",
                                "cabin": "ECONOMY",
                                "fareBasis": "BLGOWUE",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "UP TO 50LB 23KG 62LI 158LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCE SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL AND WINE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "66",
                                "cabin": "ECONOMY",
                                "fareBasis": "BLGOWUE",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "UP TO 50LB 23KG 62LI 158LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCE SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL AND WINE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "70",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT22H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "2",
                                    "at": "2024-08-20T05:50:00"
                                },
                                "arrival": {
                                    "iataCode": "FCO",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:15:00"
                                },
                                "carrierCode": "AZ",
                                "number": "59",
                                "aircraft": {
                                    "code": "32N"
                                },
                                "operating": {
                                    "carrierCode": "AZ"
                                },
                                "duration": "PT2H25M",
                                "id": "57",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "FCO",
                                    "terminal": "1",
                                    "at": "2024-08-20T09:35:00"
                                },
                                "arrival": {
                                    "iataCode": "JFK",
                                    "terminal": "1",
                                    "at": "2024-08-20T13:15:00"
                                },
                                "carrierCode": "AZ",
                                "number": "602",
                                "aircraft": {
                                    "code": "339"
                                },
                                "operating": {
                                    "carrierCode": "AZ"
                                },
                                "duration": "PT9H40M",
                                "id": "58",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "JFK",
                                    "terminal": "4",
                                    "at": "2024-08-20T15:50:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "3",
                                    "at": "2024-08-20T19:00:00"
                                },
                                "carrierCode": "AZ",
                                "number": "3174",
                                "aircraft": {
                                    "code": "76W"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT6H10M",
                                "id": "59",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1694.45",
                    "base": "1512.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1694.45",
                    "additionalServices": [
                        {
                            "amount": "130.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AZ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1694.45",
                            "base": "1512.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "57",
                                "cabin": "ECONOMY",
                                "fareBasis": "BLGOWUE",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "UP TO 50LB 23KG 62LI 158LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCE SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL AND WINE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "58",
                                "cabin": "ECONOMY",
                                "fareBasis": "BLGOWUE",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "UP TO 50LB 23KG 62LI 158LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCE SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL AND WINE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "59",
                                "cabin": "ECONOMY",
                                "fareBasis": "BLGOWUE",
                                "brandedFare": "ECOLIGHT",
                                "brandedFareLabel": "ECONOMY LIGHT",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 0
                                },
                                "amenities": [
                                    {
                                        "description": "UP TO 50LB 23KG 62LI 158LCM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCE SEAT RESERVATION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL AND WINE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "71",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 6,
                "itineraries": [
                    {
                        "duration": "PT17H22M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:00:00"
                                },
                                "arrival": {
                                    "iataCode": "JFK",
                                    "terminal": "4",
                                    "at": "2024-08-20T12:25:00"
                                },
                                "carrierCode": "VS",
                                "number": "3891",
                                "aircraft": {
                                    "code": "764"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT8H25M",
                                "id": "72",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "JFK",
                                    "terminal": "4",
                                    "at": "2024-08-20T15:15:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "3",
                                    "at": "2024-08-20T18:22:00"
                                },
                                "carrierCode": "VS",
                                "number": "4867",
                                "aircraft": {
                                    "code": "76W"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT6H7M",
                                "id": "73",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1895.31",
                    "base": "1691.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1895.31"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "VS"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1895.31",
                            "base": "1691.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "72",
                                "cabin": "ECONOMY",
                                "fareBasis": "BYQ0BBSA",
                                "brandedFare": "CLASSIC",
                                "brandedFareLabel": "ECONOMY CLASSIC",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG MAX 23KG",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCED SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEALS AND DRINKS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EARN MILES",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI",
                                        "isChargeable": true,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "73",
                                "cabin": "ECONOMY",
                                "fareBasis": "BYQ0BBSA",
                                "brandedFare": "CLASSIC",
                                "brandedFareLabel": "ECONOMY CLASSIC",
                                "class": "B",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "1ST BAG MAX 23KG",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ADVANCED SEAT SELECTION",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEALS AND DRINKS",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "EARN MILES",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGES",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI",
                                        "isChargeable": true,
                                        "amenityType": "ENTERTAINMENT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "72",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-14",
                "lastTicketingDateTime": "2024-08-14",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT36H5M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:00:00"
                                },
                                "arrival": {
                                    "iataCode": "JFK",
                                    "terminal": "4",
                                    "at": "2024-08-20T12:25:00"
                                },
                                "carrierCode": "UX",
                                "number": "3391",
                                "aircraft": {
                                    "code": "764"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT8H25M",
                                "id": "38",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "JFK",
                                    "terminal": "4",
                                    "at": "2024-08-21T10:05:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "3",
                                    "at": "2024-08-21T13:05:00"
                                },
                                "carrierCode": "UX",
                                "number": "3401",
                                "aircraft": {
                                    "code": "76W"
                                },
                                "operating": {
                                    "carrierCode": "DL"
                                },
                                "duration": "PT6H",
                                "id": "39",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2011.81",
                    "base": "1615.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2011.81"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "UX"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "2011.81",
                            "base": "1615.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "MHYOEA",
                                "brandedFare": "STANDARD",
                                "brandedFareLabel": "STANDARD",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST CHECKED BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FIRST PREPAID BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREPAID BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "MHYOEA",
                                "brandedFare": "STANDARD",
                                "brandedFareLabel": "STANDARD",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "FIRST CHECKED BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "FIRST PREPAID BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREPAID BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "73",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-20",
                "lastTicketingDateTime": "2024-08-20",
                "numberOfBookableSeats": 3,
                "itineraries": [
                    {
                        "duration": "PT17H39M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T10:50:00"
                                },
                                "arrival": {
                                    "iataCode": "EWR",
                                    "terminal": "B",
                                    "at": "2024-08-20T13:15:00"
                                },
                                "carrierCode": "UA",
                                "number": "50",
                                "aircraft": {
                                    "code": "764"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT8H25M",
                                "id": "125",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "EWR",
                                    "terminal": "C",
                                    "at": "2024-08-20T16:30:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "7",
                                    "at": "2024-08-20T19:29:00"
                                },
                                "carrierCode": "UA",
                                "number": "2151",
                                "aircraft": {
                                    "code": "752"
                                },
                                "operating": {
                                    "carrierCode": "UA"
                                },
                                "duration": "PT5H59M",
                                "id": "126",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2520.31",
                    "base": "2316.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2520.31"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "UA"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "2520.31",
                            "base": "2316.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "125",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "ONCOWB",
                                "brandedFare": "PREMECO",
                                "brandedFareLabel": "PREMIUM ECONOMY",
                                "class": "O",
                                "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": false,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREMIUM SEAT",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "126",
                                "cabin": "ECONOMY",
                                "fareBasis": "ONCOWB",
                                "brandedFare": "PREMECO",
                                "brandedFareLabel": "PREMIUM ECONOMY",
                                "class": "Y",
                                "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": false,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "UPGRADE ELIGIBILITY",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREMIUM SEAT",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "74",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 8,
                "itineraries": [
                    {
                        "duration": "PT12H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T12:40:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T16:05:00"
                                },
                                "carrierCode": "IB",
                                "number": "6171",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT12H25M",
                                "id": "77",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3467.12",
                    "base": "3268.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3467.12",
                    "additionalServices": [
                        {
                            "amount": "80.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3467.12",
                            "base": "3268.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "77",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "75",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-17",
                "lastTicketingDateTime": "2024-08-17",
                "numberOfBookableSeats": 1,
                "itineraries": [
                    {
                        "duration": "PT19H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4",
                                    "at": "2024-08-20T07:15:00"
                                },
                                "arrival": {
                                    "iataCode": "BCN",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:30:00"
                                },
                                "carrierCode": "AY",
                                "number": "5573",
                                "aircraft": {
                                    "code": "32A"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT1H15M",
                                "id": "187",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BCN",
                                    "terminal": "1",
                                    "at": "2024-08-20T14:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T18:10:00"
                                },
                                "carrierCode": "AY",
                                "number": "5395",
                                "aircraft": {
                                    "code": "332"
                                },
                                "duration": "PT13H10M",
                                "id": "188",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3476.21",
                    "base": "3253.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3476.21",
                    "additionalServices": [
                        {
                            "amount": "150.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "AY"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3476.21",
                            "base": "3253.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "187",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "brandedFare": "EFLEX",
                                "brandedFareLabel": "ECONOMY FLEX",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "MEAL AND BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CARRY ON BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "188",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "brandedFare": "EFLEX",
                                "brandedFareLabel": "ECONOMY FLEX",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "MEAL AND BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CARRY ON BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "76",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-17",
                "lastTicketingDateTime": "2024-08-17",
                "numberOfBookableSeats": 1,
                "itineraries": [
                    {
                        "duration": "PT20H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4",
                                    "at": "2024-08-20T06:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BCN",
                                    "terminal": "1",
                                    "at": "2024-08-20T08:00:00"
                                },
                                "carrierCode": "AY",
                                "number": "5571",
                                "aircraft": {
                                    "code": "32A"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT1H15M",
                                "id": "88",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BCN",
                                    "terminal": "1",
                                    "at": "2024-08-20T14:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T18:10:00"
                                },
                                "carrierCode": "AY",
                                "number": "5395",
                                "aircraft": {
                                    "code": "332"
                                },
                                "duration": "PT13H10M",
                                "id": "89",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3476.21",
                    "base": "3253.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3476.21",
                    "additionalServices": [
                        {
                            "amount": "150.00",
                            "type": "CHECKED_BAGS"
                        }
                    ]
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "AY"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3476.21",
                            "base": "3253.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "88",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "brandedFare": "EFLEX",
                                "brandedFareLabel": "ECONOMY FLEX",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "MEAL AND BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CARRY ON BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "89",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "brandedFare": "EFLEX",
                                "brandedFareLabel": "ECONOMY FLEX",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "MEAL AND BEVERAGE",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CARRY ON BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "77",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT15H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T10:40:00"
                                },
                                "arrival": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T12:00:00"
                                },
                                "carrierCode": "IB",
                                "number": "3168",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT2H20M",
                                "id": "78",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T14:05:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T17:05:00"
                                },
                                "carrierCode": "IB",
                                "number": "7429",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "BA"
                                },
                                "duration": "PT11H",
                                "id": "79",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3496.71",
                    "base": "3268.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3496.71"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3496.71",
                            "base": "3268.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "78",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            },
                            {
                                "segmentId": "79",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "78",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT15H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T09:30:00"
                                },
                                "carrierCode": "IB",
                                "number": "3162",
                                "aircraft": {
                                    "code": "330"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT2H30M",
                                "id": "183",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T11:40:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T14:55:00"
                                },
                                "carrierCode": "IB",
                                "number": "7439",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "BA"
                                },
                                "duration": "PT11H15M",
                                "id": "184",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3496.71",
                    "base": "3268.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3496.71"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3496.71",
                            "base": "3268.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "183",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            },
                            {
                                "segmentId": "184",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "79",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T09:10:00"
                                },
                                "arrival": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T10:35:00"
                                },
                                "carrierCode": "IB",
                                "number": "3160",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT2H25M",
                                "id": "185",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T14:05:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T17:05:00"
                                },
                                "carrierCode": "IB",
                                "number": "7429",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "BA"
                                },
                                "duration": "PT11H",
                                "id": "186",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3496.71",
                    "base": "3268.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3496.71"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3496.71",
                            "base": "3268.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "185",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            },
                            {
                                "segmentId": "186",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1N0C9S0",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "80",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT16H35M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "1",
                                    "at": "2024-08-20T12:45:00"
                                },
                                "arrival": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T15:05:00"
                                },
                                "carrierCode": "AC",
                                "number": "825",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT8H20M",
                                "id": "116",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "YYZ",
                                    "terminal": "1",
                                    "at": "2024-08-20T18:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "6",
                                    "at": "2024-08-20T20:20:00"
                                },
                                "carrierCode": "UA",
                                "number": "8385",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "AC"
                                },
                                "duration": "PT5H20M",
                                "id": "117",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3664.42",
                    "base": "3460.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3664.42"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "AC"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3664.42",
                            "base": "3460.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "116",
                                "cabin": "ECONOMY",
                                "fareBasis": "YFF77WW",
                                "brandedFare": "LATITUDE",
                                "brandedFareLabel": "LATITUDE",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "COMPLIMENTARY MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY CHECK IN",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BASIC SEAT",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PREMIUM SEAT",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "117",
                                "cabin": "ECONOMY",
                                "fareBasis": "HNA7A1TG",
                                "brandedFare": "ECONOMY",
                                "brandedFareLabel": "ECONOMY",
                                "class": "H",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG FIRST",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SECOND BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": false,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "ECONOMY TO ECONOMY PLUS",
                                        "isChargeable": true,
                                        "amenityType": "UPGRADES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MILEAGE ACCRUAL",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "81",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-13",
                "lastTicketingDateTime": "2024-08-13",
                "numberOfBookableSeats": 2,
                "itineraries": [
                    {
                        "duration": "PT16H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T12:20:00"
                                },
                                "arrival": {
                                    "iataCode": "DFW",
                                    "terminal": "D",
                                    "at": "2024-08-20T16:10:00"
                                },
                                "carrierCode": "IB",
                                "number": "4608",
                                "aircraft": {
                                    "code": "772"
                                },
                                "operating": {
                                    "carrierCode": "AA"
                                },
                                "duration": "PT10H50M",
                                "id": "136",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "DFW",
                                    "terminal": "0",
                                    "at": "2024-08-20T18:50:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "0",
                                    "at": "2024-08-20T20:00:00"
                                },
                                "carrierCode": "IB",
                                "number": "4162",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "AA"
                                },
                                "duration": "PT3H10M",
                                "id": "137",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3819.81",
                    "base": "3203.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3819.81"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3819.81",
                            "base": "3203.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "136",
                                "cabin": "BUSINESS",
                                "fareBasis": "DNN7C5S2",
                                "brandedFare": "BUSOPTIMA",
                                "brandedFareLabel": "BUSINESS OPTIMA",
                                "class": "D",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY CHECK IN",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING GROUP 1",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "137",
                                "cabin": "BUSINESS",
                                "fareBasis": "DNN7C5S2",
                                "brandedFare": "BUSOPTIMA",
                                "brandedFareLabel": "BUSINESS OPTIMA",
                                "class": "D",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY CHECK IN",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BOARDING GROUP 1",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRIORITY BAGGAGE",
                                        "isChargeable": false,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "82",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT15H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T09:30:00"
                                },
                                "carrierCode": "IB",
                                "number": "3162",
                                "aircraft": {
                                    "code": "330"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT2H30M",
                                "id": "132",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "LHR",
                                    "terminal": "3",
                                    "at": "2024-08-20T11:15:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T14:40:00"
                                },
                                "carrierCode": "IB",
                                "number": "4265",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "AA"
                                },
                                "duration": "PT11H25M",
                                "id": "133",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4127.71",
                    "base": "3899.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4127.71"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4127.71",
                            "base": "3899.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "132",
                                "cabin": "ECONOMY",
                                "fareBasis": "W1N0C9S0",
                                "brandedFare": "PEFULLFLEX",
                                "brandedFareLabel": "PREMIUM ECONOMY FULLY FLEXIBLE",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "133",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "W1N0C9S0",
                                "brandedFare": "PEFULLFLEX",
                                "brandedFareLabel": "PREMIUM ECONOMY FULLY FLEXIBLE",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "83",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT16H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T10:40:00"
                                },
                                "arrival": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T12:00:00"
                                },
                                "carrierCode": "IB",
                                "number": "3168",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT2H20M",
                                "id": "95",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "LHR",
                                    "terminal": "3",
                                    "at": "2024-08-20T14:45:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T18:10:00"
                                },
                                "carrierCode": "IB",
                                "number": "4822",
                                "aircraft": {
                                    "code": "772"
                                },
                                "operating": {
                                    "carrierCode": "AA"
                                },
                                "duration": "PT11H25M",
                                "id": "96",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4127.71",
                    "base": "3899.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4127.71"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4127.71",
                            "base": "3899.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "95",
                                "cabin": "ECONOMY",
                                "fareBasis": "W1N0C9S0",
                                "brandedFare": "PEFULLFLEX",
                                "brandedFareLabel": "PREMIUM ECONOMY FULLY FLEXIBLE",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "96",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "W1N0C9S0",
                                "brandedFare": "PEFULLFLEX",
                                "brandedFareLabel": "PREMIUM ECONOMY FULLY FLEXIBLE",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "84",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT17H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T12:10:00"
                                },
                                "arrival": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T13:30:00"
                                },
                                "carrierCode": "IB",
                                "number": "7461",
                                "aircraft": {
                                    "code": "32Q"
                                },
                                "operating": {
                                    "carrierCode": "BA"
                                },
                                "duration": "PT2H20M",
                                "id": "55",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "LHR",
                                    "terminal": "3",
                                    "at": "2024-08-20T16:55:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T20:20:00"
                                },
                                "carrierCode": "IB",
                                "number": "4238",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "AA"
                                },
                                "duration": "PT11H25M",
                                "id": "56",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4127.71",
                    "base": "3899.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4127.71"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4127.71",
                            "base": "3899.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "55",
                                "cabin": "ECONOMY",
                                "fareBasis": "W1N0C9S0",
                                "brandedFare": "PEFULLFLEX",
                                "brandedFareLabel": "PREMIUM ECONOMY FULLY FLEXIBLE",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "56",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "W1N0C9S0",
                                "brandedFare": "PEFULLFLEX",
                                "brandedFareLabel": "PREMIUM ECONOMY FULLY FLEXIBLE",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "85",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2024-08-12",
                "lastTicketingDateTime": "2024-08-12",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT18H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "MAD",
                                    "terminal": "4S",
                                    "at": "2024-08-20T09:10:00"
                                },
                                "arrival": {
                                    "iataCode": "LHR",
                                    "terminal": "5",
                                    "at": "2024-08-20T10:35:00"
                                },
                                "carrierCode": "IB",
                                "number": "3160",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "IB"
                                },
                                "duration": "PT2H25M",
                                "id": "5",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "LHR",
                                    "terminal": "3",
                                    "at": "2024-08-20T14:45:00"
                                },
                                "arrival": {
                                    "iataCode": "LAX",
                                    "terminal": "B",
                                    "at": "2024-08-20T18:10:00"
                                },
                                "carrierCode": "IB",
                                "number": "4822",
                                "aircraft": {
                                    "code": "772"
                                },
                                "operating": {
                                    "carrierCode": "AA"
                                },
                                "duration": "PT11H25M",
                                "id": "6",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4127.71",
                    "base": "3899.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4127.71"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "IB"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4127.71",
                            "base": "3899.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "5",
                                "cabin": "ECONOMY",
                                "fareBasis": "W1N0C9S0",
                                "brandedFare": "PEFULLFLEX",
                                "brandedFareLabel": "PREMIUM ECONOMY FULLY FLEXIBLE",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "6",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "W1N0C9S0",
                                "brandedFare": "PEFULLFLEX",
                                "brandedFareLabel": "PREMIUM ECONOMY FULLY FLEXIBLE",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 2
                                },
                                "amenities": [
                                    {
                                        "description": "THIRD CHECKED BAG",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "SNACK OR DRINK",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "WIFI CONNECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "dictionaries": {
            "locations": {
                "ORD": {
                    "cityCode": "CHI",
                    "countryCode": "US"
                },
                "LAX": {
                    "cityCode": "LAX",
                    "countryCode": "US"
                },
                "BRU": {
                    "cityCode": "BRU",
                    "countryCode": "BE"
                },
                "CDG": {
                    "cityCode": "PAR",
                    "countryCode": "FR"
                },
                "WAW": {
                    "cityCode": "WAW",
                    "countryCode": "PL"
                },
                "JFK": {
                    "cityCode": "NYC",
                    "countryCode": "US"
                },
                "DUB": {
                    "cityCode": "DUB",
                    "countryCode": "IE"
                },
                "DFW": {
                    "cityCode": "DFW",
                    "countryCode": "US"
                },
                "LHR": {
                    "cityCode": "LON",
                    "countryCode": "GB"
                },
                "MUC": {
                    "cityCode": "MUC",
                    "countryCode": "DE"
                },
                "BOG": {
                    "cityCode": "BOG",
                    "countryCode": "CO"
                },
                "SFO": {
                    "cityCode": "SFO",
                    "countryCode": "US"
                },
                "EWR": {
                    "cityCode": "NYC",
                    "countryCode": "US"
                },
                "BOS": {
                    "cityCode": "BOS",
                    "countryCode": "US"
                },
                "AMS": {
                    "cityCode": "AMS",
                    "countryCode": "NL"
                },
                "IST": {
                    "cityCode": "IST",
                    "countryCode": "TR"
                },
                "BCN": {
                    "cityCode": "BCN",
                    "countryCode": "ES"
                },
                "IAD": {
                    "cityCode": "WAS",
                    "countryCode": "US"
                },
                "MAD": {
                    "cityCode": "MAD",
                    "countryCode": "ES"
                },
                "YUL": {
                    "cityCode": "YMQ",
                    "countryCode": "CA"
                },
                "FCO": {
                    "cityCode": "ROM",
                    "countryCode": "IT"
                },
                "FRA": {
                    "cityCode": "FRA",
                    "countryCode": "DE"
                },
                "LIS": {
                    "cityCode": "LIS",
                    "countryCode": "PT"
                },
                "ATL": {
                    "cityCode": "ATL",
                    "countryCode": "US"
                },
                "YYZ": {
                    "cityCode": "YTO",
                    "countryCode": "CA"
                },
                "SAL": {
                    "cityCode": "SAL",
                    "countryCode": "SV"
                }
            },
            "aircraft": {
                "32A": "AIRBUS A320 (SHARKLETS)",
                "7M8": "BOEING 737 MAX 8",
                "7M9": "BOEING 737 MAX 9",
                "74H": "BOEING 747-8",
                "350": "AIRBUS INDUSTRIE A350",
                "32N": "AIRBUS A320NEO",
                "330": "AIRBUS INDUSTRIE A330",
                "32Q": "AIRBUS A321NEO",
                "332": "AIRBUS A330-200",
                "772": "BOEING 777-200/200ER",
                "333": "AIRBUS A330-300",
                "32S": "AIRBUS INDUSTRIE A318/A319/A320/A321",
                "752": "BOEING 757-200",
                "753": "BOEING 757-300",
                "777": "BOEING 777-200/300",
                "359": "AIRBUS A350-900",
                "76W": "BOEING 767-300 (WINGLETS)",
                "339": "AIRBUS A330-900NEO PASSENGER",
                "757": "BOEING 757",
                "319": "AIRBUS A319",
                "738": "BOEING 737-800",
                "739": "BOEING 737-900",
                "73H": "BOEING 737-800 (WINGLETS)",
                "73J": "BOEING 737-900",
                "781": "BOEING 787-10",
                "320": "AIRBUS A320",
                "321": "AIRBUS A321",
                "343": "AIRBUS A340-300",
                "388": "AIRBUS A380-800",
                "764": "BOEING 767-400",
                "787": "787  ALL SERIES PASSENGER",
                "788": "BOEING 787-8",
                "744": "BOEING 747-400",
                "77W": "BOEING 777-300ER",
                "789": "BOEING 787-9",
                "7S8": "BOEING 737-800 SCIMITAR WINGLETS"
            },
            "currencies": {
                "EUR": "EURO"
            },
            "carriers": {
                "AA": "AMERICAN AIRLINES",
                "7X": "AMADEUS SEVEN",
                "DE": "CONDOR",
                "KL": "KLM ROYAL DUTCH AIRLINES",
                "6X": "AMADEUS SIX",
                "AC": "AIR CANADA",
                "LO": "LOT POLISH AIRLINES",
                "UX": "AIR EUROPA",
                "EI": "AER LINGUS",
                "AF": "AIR FRANCE",
                "DL": "DELTA AIR LINES",
                "I2": "IBERIA EXPRESS",
                "UA": "UNITED AIRLINES",
                "B6": "JETBLUE AIRWAYS",
                "AV": "AVIANCA",
                "TK": "TURKISH AIRLINES",
                "AY": "FINNAIR",
                "IB": "IBERIA",
                "AZ": "ITA AIRWAYS",
                "SN": "BRUSSELS AIRLINES",
                "TP": "TAP PORTUGAL",
                "LH": "LUFTHANSA",
                "VS": "VIRGIN ATLANTIC",
                "BA": "BRITISH AIRWAYS"
            }
        }
    }
  }
}
