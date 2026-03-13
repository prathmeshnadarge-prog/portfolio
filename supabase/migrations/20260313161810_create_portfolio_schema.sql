/*
  # Portfolio Website Database Schema

  ## Overview
  This migration creates the complete database structure for Prathmesh Nadarge's research portfolio website.

  ## New Tables
  
  ### `projects`
  - `id` (uuid, primary key)
  - `title` (text) - Project name
  - `role` (text) - Position/role in project
  - `institution` (text) - Organization
  - `start_date` (date) - Project start
  - `end_date` (date, nullable) - Project end (null if ongoing)
  - `description` (text) - Detailed description
  - `achievements` (jsonb) - Array of key achievements
  - `technologies` (jsonb) - Array of technologies used
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `publications`
  - `id` (uuid, primary key)
  - `type` (text) - journal_article, book_chapter, conference, patent
  - `title` (text)
  - `authors` (text)
  - `publication` (text) - Journal/Conference name
  - `year` (integer)
  - `status` (text) - published, accepted, under_review
  - `impact_factor` (numeric, nullable)
  - `doi` (text, nullable)
  - `citation` (text) - Full citation
  - `display_order` (integer)
  - `created_at` (timestamptz)

  ### `skills`
  - `id` (uuid, primary key)
  - `category` (text) - laboratory, molecular, analytical, computational, field
  - `name` (text)
  - `proficiency` (text) - expert, advanced, intermediate
  - `description` (text, nullable)
  - `display_order` (integer)
  - `created_at` (timestamptz)

  ### `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `subject` (text)
  - `message` (text)
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for projects, publications, and skills
  - Authenticated-only write access for content management
  - Public insert access for contact messages
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  role text NOT NULL,
  institution text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  description text NOT NULL,
  achievements jsonb DEFAULT '[]'::jsonb,
  technologies jsonb DEFAULT '[]'::jsonb,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('journal_article', 'book_chapter', 'conference', 'patent')),
  title text NOT NULL,
  authors text NOT NULL,
  publication text,
  year integer NOT NULL,
  status text DEFAULT 'published' CHECK (status IN ('published', 'accepted', 'under_review')),
  impact_factor numeric,
  doi text,
  citation text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL CHECK (category IN ('laboratory', 'molecular', 'analytical', 'computational', 'field')),
  name text NOT NULL,
  proficiency text DEFAULT 'intermediate' CHECK (proficiency IN ('expert', 'advanced', 'intermediate')),
  description text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view publications"
  ON publications FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view skills"
  ON skills FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_publications_year ON publications(year DESC);
CREATE INDEX IF NOT EXISTS idx_publications_type ON publications(type);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);