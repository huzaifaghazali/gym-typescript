import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  // State to track whether the media query currently matches or not.
  const [matches, setMatches] = useState(false);

  // Effect hook that runs when the component mounts and whenever the matches state changes.
  useEffect(() => {
    // Create a MediaQueryList object for the given query string.
    const media = window.matchMedia(query);

    // Check if the initial matches state is different from the current state of the media query.
    // If it is, update the matches state to match the current state of the media query.
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Event listener function that updates the matches state whenever the media query changes.
    const listener = () => setMatches(media.matches);

    // Add the event listener to the window object for the 'resize' event.
    window.addEventListener('resize', listener);

    // Cleanup function that removes the event listener when the component unmounts.
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  // Return the current matches state.
  return matches;
};

export default useMediaQuery;
