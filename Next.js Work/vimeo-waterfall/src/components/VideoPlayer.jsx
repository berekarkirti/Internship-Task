// Using Vimeo:- 

// import React from 'react';

// const VideoPlayer = ({ videoId, hash }) => 
// {
 
//   const vimeoUrl = `https://player.vimeo.com/video/${videoId}${hash ? `?h=${hash}` : ''}?badge=0&autopause=0&player_id=0&app_id=58479`;

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl">
//         <iframe src={vimeoUrl} className="absolute top-0 left-0 w-full h-full" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowFullScreen title="Waterfall" ></iframe>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

// -------------------------------------------------------------------------------------------------------------------------------------------

// Using Vdocipher :- 

import React from 'react';

const VideoPlayer = ({ otp, playbackInfo }) => {
  const vdoCipherUrl = `https://player.vdocipher.com/v2/?otp=${otp}&playbackInfo=${playbackInfo}`;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl">
        <iframe
          src={vdoCipherUrl}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          title="Waterfall"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;