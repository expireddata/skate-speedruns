export type ContentSection = {
  title: string;
  description: string;
  videoUrl?: string;
};

export type InfoSection = {
  name: string;
  contentSections: ContentSection[];
};
