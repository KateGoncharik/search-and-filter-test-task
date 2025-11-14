export async function getParts(partName: string, page?: number) {
  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetParts?name=${partName}&format=json&page=${
        page ?? 1
      }`
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
