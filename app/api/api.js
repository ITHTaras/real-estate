// API options
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const loadOptions = async (inputValue) => {
  if (inputValue === "")
    return {
      options: [],
      hasMore: false,
    };
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}`;
  let result = [];

  try {
    const response = await fetch(url, options);

    result = await response.json();

    return {
      options: result.data.map((city) => {
        return {
          value: city.id,
          label: `${city.name}, ${city.region}`,
          additional: {
            city: city.name,
            lat: city.latitude,
            long: city.longitude,
          },
        };
      }),
      hasMore: false,
    };
  } catch (error) {
    console.error(error);
  }
};
