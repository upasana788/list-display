export interface Media {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface InfoCardProps {
  media: Media;
}
