// Using Vimeo:-

// import Head from 'next/head';
// import VideoPlayer from '../components/VideoPlayer';

// export default function Home() 
// {
//   const videoId = '1078624710'; 
//   const hash = '';           

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-green-100">

//       <Head>
//         <title>Waterfall Serenity</title>
//         <meta name="description" content="Experience the beauty of a cascading waterfall in this private Vimeo video." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <header className="text-center py-10">
//         <h1 className="text-5xl font-bold text-gray-800 mb-4">Waterfall Serenity</h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Immerse yourself in the tranquil beauty of a cascading waterfall, captured in stunning detail. This private video is exclusively for you.
//         </p>
//       </header>

//       <main className="flex-1 flex items-center justify-center w-full px-4">
//         <VideoPlayer videoId={videoId} hash={hash} />
//       </main>

//       <footer className="py-6 text-center text-gray-500">
//         <p>Powered by Next.js & Vimeo</p>
//       </footer>
      
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------

// Using Vdocipher :-

import Head from 'next/head';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  const otp = '20160313versASE323M0XLfWxkzlFFp0hyf9gQ9O3eRHTjbiywMMQSsJdVtbu6Yf'; 
  const playbackInfo = 'eyJ2aWRlb0lkIjoiOWMzMzU5YjFiYzJlNDdhOGFhYzFmMDEwMzk4N2E2Y2QifQ=='; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-green-100">
      <Head>
        <title>Waterfall Serenity</title>
        <meta name="description" content="Experience the beauty of a cascading waterfall in this private VdoCipher video." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Waterfall Serenity</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Immerse yourself in the tranquil beauty of a cascading waterfall, captured in stunning detail. This private video is exclusively for you.
        </p>
      </header>

      <main className="flex-1 flex items-center justify-center w-full px-4">
        <VideoPlayer otp={otp} playbackInfo={playbackInfo} />
      </main>

      <footer className="py-6 text-center text-gray-500">
        <p>Powered by Next.js & VdoCipher</p>
      </footer>
    </div>
  );
}