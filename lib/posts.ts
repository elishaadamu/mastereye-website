import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '_posts');

import { PostData } from "@/lib/types";

export function getSortedPostsData(): PostData[] {
  // Check if directory exists, if not, create it
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Extract date and title from slug (e.g., 2023-02-25-protocol-officer)
    const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})-/);
    let date = '';
    if (dateMatch) {
      date = dateMatch[1];
    } else {
       date = '2023-01-01'; // Default
    }

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const imageStr = matterResult.data.image;
    let finalImage = imageStr ? imageStr : null;
    if (finalImage && !finalImage.startsWith('/')) {
        finalImage = '/' + finalImage;
    }

    // Combine the data with the id
    return {
      ...matterResult.data,
      slug,
      date,
      content: matterResult.content,
      title: matterResult.data.title || slug,
      image: finalImage,
      categories: matterResult.data.categories || [],
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(slug: string): PostData | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
     return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})-/);
  const date = dateMatch ? dateMatch[1] : '2023-01-01';

  const imageStr = matterResult.data.image;
  let finalImage = imageStr ? imageStr : null;
  if (finalImage && !finalImage.startsWith('/')) {
      finalImage = '/' + finalImage;
  }

  return {
    ...matterResult.data,
    slug,
    date,
    content: matterResult.content,
    title: matterResult.data.title || slug,
    image: finalImage,
    categories: matterResult.data.categories || [],
  };
}
