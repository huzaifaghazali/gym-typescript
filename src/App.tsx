import Navbar from '@/scenes/navbar';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Home from '@/scenes/home';
import Benefits from '@/scenes/benefits';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // It sets up a scroll event listener that will call the handleScroll function whenever the user scrolls. The handleScroll function checks if the user has scrolled to the top of the page and updates the isTopOfPage and selectedPage states accordingly.
  useEffect(() => {
    // Define the handleScroll function.
    const handleScroll = () => {
      // Check if the user has scrolled to the top of the page.
      if (window.scrollY === 0) {
        // If so, update the isTopOfPage state to true and the selectedPage state to 'home'.
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      // If the user has not scrolled to the top of the page, update the isTopOfPage state to false.
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    // Add the handleScroll function as a scroll event listener to the window object.
    window.addEventListener('scroll', handleScroll);

    // When the component unmounts or the effect reruns, remove the scroll event listener.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
