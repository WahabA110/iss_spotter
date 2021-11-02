const { fetchMyIP } = require('./iss');

const { fetchCoordsByIP } = require('./iss');

const { fetchISSFlyOverTimes } = require('./iss');



// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP('99.251.122.170', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });


fetchISSFlyOverTimes({ latitude: 43.3894, longitude: -80.429 }, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});