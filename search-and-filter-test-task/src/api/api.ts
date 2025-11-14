const API_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/';

export async function getParts(partName: string, page?: number) {
  try {
    const response = await fetch(
      `${API_URL}GetParts?name=${partName}&format=json&page=${page ?? 1}`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error while fetching parts:', error);
    return null;
  }
}

export async function getManufacturerDetails(manufacturerId: number) {
  try {
    const response = await fetch(
      `${API_URL}getmanufacturerdetails/${manufacturerId}?format=json`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error while fetching manufacturer details:', error);
    return null;
  }
}
