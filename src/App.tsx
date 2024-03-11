import './App.css';
import cover from './assets/hyper.png';

import Countdown from 'react-countdown';

function App() {
  // releases on April 26 2024
  const releaseDate = new Date('2024-04-26T00:00:00');

  return (
    <main className='dark'>
      <div className='relative flex flex-col h-screen w-screen items-center justify-center bg-white dark:bg-black transition-bg'>
        <div
          className='absolute h-screen w-screen items-center'
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.9,
          }}
        />
        <div className='absolute inset-0 overflow-hidden'>
          <div className='jumbo absolute -inset-[10px] opacity-50'></div>
        </div>
        <h1 className='relative flex items-center text-5xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors'>
          hyperdrama
        </h1>
        <div className='text-gray-800 dark:text-white dark:opacity-90 transition-colors text-lg'>
          <Countdown date={releaseDate} />
        </div>
      </div>
      <h2 className='fixed left-0 bottom-0 p-4 flex items-center text-2xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors'>
        potran
      </h2>
    </main>
  );
}

export default App;
