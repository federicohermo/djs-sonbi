declare global {
    interface Window {
      YT: any;
      onYouTubeIframeAPIReady: () => void;
    }
  
    namespace YT {
      class Player {
        constructor(id: string, options: any);
        pauseVideo(): void;
        playVideo(): void;
      }
    }
  }
  
  export {};
  