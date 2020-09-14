const conversion = {
  length: {
    first: [
      {
        m: "1 millimetre [mm]",
        i: "0.03937 in",
      },
      {
        m: "1 centimetre [cm]",
        i: "0.3937 in",
      },
      {
        m: "1 metre [m]",
        i: "1.0936 yd",
      },
      {
        m: "1 kilometre [km]",
        i: "0.6214 mile",
      },
    ],
    second: [
      {
        i: "1 inch [in]",
        m: "2.54 cm",
      },
      {
        i: "1 foot [ft]",
        m: "0.3048 m",
      },
      {
        i: "1 yard [yd]",
        m: "0.9144 m",
      },
      {
        i: "1 mile",
        m: "1.6093 km",
      },
      {
        i: "1 int nautical mile",
        m: "1.853 km",
      },
    ],
  },
  area: {
    first: [
      {
        m: "1 sq cm [cm2]",
        i: "0.1550 in2",
      },
      {
        m: "1 sq m [m2]",
        i: "1.1960 yd2",
      },
      {
        m: "1 hectare [ha]",
        i: "2.4711 acres",
      },
      {
        m: "1 sq km [km2]",
        i: "0.3861 mile2",
      },
    ],
    second: [
      {
        i: "1 sq inch [in2]",
        m: "6.4516 cm2",
      },
      {
        i: "1 sq foot [sq ft]",
        m: "0.0929 m2",
      },
      {
        i: "1 sq yd [yd2]",
        m: "0.8361 m2",
      },
      {
        i: "1 acre",
        m: "4046.9 m2",
      },
      {
        i: "1 sq mile [mile2]",
        m: "2.59 km2",
      },
    ],
  },
  volume: [
    {
      m: "1 cu cm [cm3]",
      i: "0.0610 in3",
    },
    {
      m: "1 cu decimetre [dm3]",
      i: "0.0353 ft3",
    },
    {
      m: "1 cu metre [m3]",
      i: "1.3080 yd3",
    },
    {
      m: "1 litre [l]",
      i: "1.76 pt",
    },
    {
      m: "1 hectolitre [hl]",
      i: "21.997 gal",
    },
    {
      i: "1 cu inch [in3]",
      m: "16.387 cm3",
    },
    {
      i: "1 cu foot [ft3]",
      m: "0.0283 m3",
    },
    {
      i: "1 fluid ounce [fl oz]",
      m: "28.413 ml",
    },
    {
      i: "1 pint [pt]",
      m: "0.5683 l",
    },
    {
      i: "1 gallon [gal]",
      m: "4.5461 l",
    },
  ],
};

export default conversion;
