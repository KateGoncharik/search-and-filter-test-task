import { DEFAULT_PAGINATION_PAGE } from '../Components/state';
import { ResultItem } from '../types';

const API_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/';

const buildQuery = (type?: string, page: number = DEFAULT_PAGINATION_PAGE) => {
  const params: Array<string> = [];
  if (type) {
    params.push(`type=${type}`);
  }
  params.push(`page=${page}`);
  if (params.length === 0) {
    return '';
  }
  return `${params.join('&')}&`;
};

export async function getParts(
  type?: string,
  page?: number
): Promise<{ results: Array<ResultItem>; total: number } | null> {
  try {
    const response = await fetch(
      `${API_URL}GetParts?${buildQuery(type, page)}format=json`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const res = await response.json();
    return { results: res.Results, total: res.Count };
  } catch (error) {
    console.error('Error while fetching parts:', error);
    return null;
  }
}

export async function getPartsByName(name: string) {
  const allParts = await getParts();
  return allParts ? allParts.results.filter((part) => part.Name === name) : [];
}

export async function getManufacturerDetails(manufacturerId: number) {
  try {
    const response = await fetch(
      `${API_URL}getmanufacturerdetails/${manufacturerId}?format=json`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const res = await response.json();
    // Because : If supplied parameter is a number - method will do exact match on Manufacturer's Id and return exactly one record.
    return res.Results[0];
  } catch (error) {
    console.error('Error while fetching manufacturer details:', error);
    return null;
  }
}
