export const runtime = 'edge';

export async function GET(request, params) {
  const coordinates = params.params.location
  const parts = coordinates.split(',');
  const latitude = parseFloat(parseFloat(parts[0]).toFixed(6));
  const longitude = parseFloat(parseFloat(parts[1]).toFixed(6));

  async function getCityName(latitude, longitude) {
    const gmapapi = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBbdR2JQyrIbZY466_WUALUerhfyBAVN3s&language=zh-cn`, { cache: 'force-cache' });
    const data = await gmapapi.json();
    if (data.status === 'OK') {
      const components = data.results[0].address_components;
      const cityComponent = components.find(component => component.types.includes('locality'));
      const provinceComponent = components.find(component => component.types.includes('administrative_area_level_1'));
      const countryComponent = components.find(component => component.types.includes('country'));
      return {
        'city': cityComponent ? cityComponent.long_name : null,
        'province': provinceComponent ? provinceComponent.long_name : null,
        'country': countryComponent ? countryComponent.long_name : null,
      }
    } else {
      throw new Error(`Geocoding API request failed with status: ${data.status}`);
    }
  }

  const locationName = await getCityName(latitude, longitude);
  const locationNameJson = JSON.stringify(locationName)

  const response = new Response(locationNameJson, {
    headers: {
      cacheControl: 'public, max-age=86400',
    },
  });
  return response;
}