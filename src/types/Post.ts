import { PortableTextBlock } from "sanity";
import { Category } from "./Category";
import { Tag } from "./Tag";

export interface Post {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  slug: string;
  image: string;
  readTime: number;
  publishedAt: Date;
  content: PortableTextBlock[];
  category: Category;
  tags: Tag[];
}
