// http://knights-t.herokuapp.com/

/*
Welcome to Knights Tour.


Endpoints: 
/

This documentation


/legalMove

Post Endpoint

Request:

row and col are integers between 0 and 7 inclusive.
{ from: [col, row], to: [col, row] }

Response

{ from: [col, row], to: [col, row], isLegal: true/false }



Sample:
Request:
{ "from": [0, 0], "to": [3, 5] }

Response:
{ "status": "ok", "from": [ 0, 0 ], "to": [ 3, 5 ], "isLegal": false }
*/

import axios from 'axios';

export async function legalMove(from, to) {
  const response = await axios.post(
    'http://knights-t.herokuapp.com/legalMove',
    {
      from,
      to
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  
  return response.data.isLegal
}