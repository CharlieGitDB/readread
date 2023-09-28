import { Media, Preview } from "../../models/home";
import { CardImage } from '@components';

interface CardVideo {
  preview: Preview;
  media: Media;
}

export const CardVideo: React.FC<CardVideo> = ({ preview, media }) => (
  <video preload="auto" poster={preview.images[0].source.url} controls>
    <source src={media.reddit_video.dash_url}></source>
    <source src={media.reddit_video.fallback_url}></source>
    <source src={media.reddit_video.scrubber_media_url}></source>
    <CardImage preview={preview} />
  </video>
)