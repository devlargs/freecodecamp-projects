export default {
  REQUEST_HEADER_PARSER: {
    examples: [
      {
        type: "GET",
        url: "/api/whoami",
      },
    ],
    stories: [
      "Your IP address should be returned in the ipaddress key.",
      `Your preferred language should be returned in the language key.`,
      "Your software should be returned in the software key.",
    ],
  },
  URL_SHORTENER: {
    examples: [
      {
        type: "POST",
        url: "/api/shorturl/new",
      },
    ],
    stories: [
      `I can POST a URL to [project_url]/api/shorturl/new and I will receive a shortened URL in the JSON response.
        Example : {"original_url":"www.google.com","short_url":1}`,
      `If I pass an invalid URL that doesn't follow the http(s)://www.example.com(/more/routes) format, the JSON response will contain an error like {"error":"invalid URL"}. <br /> HINT: to be sure that the submitted url points to a valid site you can use the function dns.lookup(host, cb) from the dns core module.`,
      "When I visit the shortened URL, it will redirect me to my original link.",
    ],
  },
  TIMESTAMP_MICROSERVICE: {
    examples: [
      {
        type: "GET",
        url: "/api/timestamp/2020-10-28",
      },
      {
        type: "GET",
        url: "/api/timestamp/814809600000",
      },
      {
        type: "GET",
        url: "/api/timestamp",
      },
    ],
    stories: [
      "The API endpoint is GET [project_url]/api/timestamp/:date_string?",
      `A date string is valid if can be successfully parsed by new Date(date_string).
        Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
        In our test we will use date strings compliant with ISO-8601 (e.g. <b>2016-11-20</b>) because this will ensure an UTC timestamp.`,
      "If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.",
      `If the date string is valid the api returns a JSON having the structure
        {"unix": <b>date.getTime()</b>, "utc" : <b>date.toUTCString()</b> }<br />
        e.g.<br /> 
        
{
    "unix": 1479663089000,
    "utc": "Sun, 20 Nov 2016 17:31:29 GMT"
}
       <br/> `,
      `If the date string is invalid the api returns a JSON having the structure
        {"error" : "Invalid Date" }.`,
    ],
  },
};
