export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: BlogAuthor;
  publishedDate: string;
  readTime: string;
  heroImage: string;
  featured: boolean;
  content: string[]; // Rich paragraphs / formatted content blocks
  tags: string[];
  status?: 'published' | 'draft';
  createdAt?: string;
  updatedAt?: string;
}

export type BlogTemplateType = 'strategy' | 'casestudy' | 'guide' | 'announcement';

export interface BlogTemplate {
  id: BlogTemplateType;
  name: string;
  description: string;
  defaultCategory: string;
  defaultTitle: string;
  defaultExcerpt: string;
  defaultContent: string[];
  defaultTags: string[];
  suggestedHeroImage: string;
}
