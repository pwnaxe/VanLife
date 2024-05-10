import qs from "qs";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

import {
  flattenAttributes,
  getStrapiURL,
  getStrapiMedia,
} from "@/utilities/utils";

const baseUrl = getStrapiURL();

export interface Product {
  name: string;
  content: string;
  id: string;
  price: number;
  image: string;
}

export interface Gallery {
  name: string;
  content: string;
  id: string;
  title: string;
  image: string | null;
  slider: string[] | null;
}

export interface Blog {
  name: string;
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  image: string;
  imagepost: string;
  role: string;
  post: BlocksContent;
  content?: BlocksContent;
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

export async function getgalleries(): Promise<Gallery[]> {
  const url = new URL("/api/galleries", baseUrl);
  const queryParameters = { populate: "*" };
  const queryString = qs.stringify(queryParameters, { encode: false });
  url.search = queryString;

  try {
    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const galleries: Gallery[] = data.data.map((item: any) => ({
      ...flattenAttributes(item),
      image:
        item.attributes.image && item.attributes.image.data
          ? getStrapiMedia(item.attributes.image.data.attributes.url)
          : null,
      slider:
        item.attributes.slider && item.attributes.slider.data
          ? item.attributes.slider.data.map((slide: any) =>
              getStrapiMedia(slide.attributes.url)
            )
          : null,
    }));
    return galleries;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getBlogs(): Promise<Blog[]> {
  const url = new URL("/api/blogs", baseUrl);
  const queryParameters = { populate: "*" };
  const queryString = qs.stringify(queryParameters, { encode: false });
  url.search = queryString;

  try {
    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const blogs: Blog[] = data.data.map((item: any) => ({
      ...flattenAttributes(item),
      image:
        item.attributes.image && item.attributes.image.data
          ? getStrapiMedia(item.attributes.image.data.attributes.url)
          : null,
      imagepost:
        item.attributes.image && item.attributes.image.data
          ? getStrapiMedia(item.attributes.image.data.attributes.url)
          : null,
    }));
    return blogs;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getBlog(BlogId: string): Promise<Blog | null> {
  const url = new URL(`/api/blogs/${BlogId}`, baseUrl);
  const queryParameters = { populate: "*" };
  const queryString = qs.stringify(queryParameters, { encode: false });
  url.search = queryString;

  try {
    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const blog: Blog = {
      ...flattenAttributes(data.data),
      image:
        data.data.attributes.image && data.data.attributes.image.data
          ? getStrapiMedia(data.data.attributes.image.data.attributes.url)
          : null,
      imagepost:
        data.data.attributes.imagepost && data.data.attributes.imagepost.data
          ? getStrapiMedia(data.data.attributes.imagepost.data.attributes.url)
          : null,
    };
    return blog;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
