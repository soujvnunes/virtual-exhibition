import { YoutubeVideoProps, YoutubeVideoRef } from "interface";
import { forwardRef } from "react";

const YoutubeVideo = forwardRef<YoutubeVideoRef, YoutubeVideoProps>(
  function YoutubeVideo(props, ref) {
    return (
      <iframe
        ref={ref}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...props}
      />
    );
  },
);

YoutubeVideo.displayName = "YoutubeVideo";
export default YoutubeVideo;
