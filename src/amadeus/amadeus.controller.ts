import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import * as Amadeus from 'amadeus';

@Controller('')
export class AmadeusController {
  AMEDEUS_SETUP = new Amadeus({
    // clientId: 'ZdAeyPd3lQBFBfAhcHT7Z4TTQ3fi35fH',
    // clientSecret: 'mOt4OFw7hap6UGfy',
    clientId: process.env.AMEDEUS_CLIENT_ID,
    clientSecret: process.env.AMEDUES_CLIENT_SECRET,
  });

  @Get('date')
  async getDate(@Query() dateQuery) {
    console.log('incoming dateQuery ===> ', dateQuery);
    const departure = dateQuery.departure;
    // const arrival = dateQuery.arrival;
    const locationDeparture = dateQuery.locationDeparture;
    const locationArrival = dateQuery.locationArrival;
    const response = await this.AMEDEUS_SETUP.shopping.flightOffersSearch
      .get({
        originLocationCode: locationDeparture,
        destinationLocationCode: locationArrival,
        departureDate: departure,
        adults: '1',
      })
      .catch((err) => console.log(err));
    try {
      //   console.log('resposne from date ==> ', response.body);
      return response.body;
    } catch (err) {
      console.log('resposne from date error  ==> ', response);
    }
  }

  @Get('get-cities')
  async getCities(@Query() cityQuery) {
    console.log('Incoming city query ==> ', cityQuery);
    const { keyword } = cityQuery;
    const response = await this.AMEDEUS_SETUP.referenceData.locations
      .get({
        keyword,
        // subType: 'CITY,AIRPORT',
        subType: 'AIRPORT',
      })
      .catch((x) => console.log(x));
    try {
      return response.body;
    } catch (err) {
      console.log('Error ==? ', err);
      return {};
    }
  }
  @Post('final-price')
  async getFinalPrice(@Body() flightOfferParams) {
    const { inputFlight } = flightOfferParams;

    console.log('incoming inputFlight  ==> ', inputFlight);
    const responsePricing =
      await this.AMEDEUS_SETUP.shopping.flightOffers.pricing
        .post(
          JSON.stringify({
            data: {
              type: 'flight-offers-pricing',
              flightOffers: [inputFlight],
            },
          }),
        )
        .catch((err) => console.log(err));
    try {
      // await res.json(JSON.parse(responsePricing.body));

      return responsePricing.body;
    } catch (err) {
      return { msg: err };
    }
  }
}
