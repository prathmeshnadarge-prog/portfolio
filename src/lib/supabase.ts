import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "http://dummy.supabase.co";
const supabaseAnonKey = "dummy_key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  role: string;
  institution: string;
  start_date: string;
  end_date: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
  display_order: number;
};

export type Publication = {
  id: string;
  type: 'journal_article' | 'book_chapter' | 'conference' | 'patent';
  title: string;
  authors: string;
  publication: string | null;
  year: number;
  status: 'published' | 'accepted' | 'under_review';
  impact_factor: number | null;
  citation: string;
  display_order: number;
};

export type Skill = {
  id: string;
  category: 'laboratory' | 'molecular' | 'analytical' | 'computational' | 'field';
  name: string;
  proficiency: 'expert' | 'advanced' | 'intermediate';
  description: string | null;
  display_order: number;
};

export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
