import qs from "qs";

import {
  flattenAttributes,
  getStrapiURL,
  getStrapiMedia,
} from "@/utilities/utils";

const baseUrl = getStrapiURL();

interface Product {
  name: string;
  content: string;
}

export async function getproducts(): Promise<Product[]> {
  const url = new URL("/api/products", baseUrl);
  const queryParameters = { populate: "*" };
  const queryString = qs.stringify(queryParameters, { encode: false });
  url.search = queryString;

  try {
    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const products: Product[] = data.data.map((item: any) => ({
      ...flattenAttributes(item),
      image:
        item.attributes.image && item.attributes.image.data
          ? getStrapiMedia(item.attributes.image.data.attributes.url)
          : null,
    }));
    return products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
