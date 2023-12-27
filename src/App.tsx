// import './App.css';

import Hello from '@/components/Hello/Hello';
import Test from '@/components/Test/Test';

// import b from './assets/images/b.png';
// import c from './assets/react.svg';

function App() {
  return (
    <div className='App'>
      {/* <img src='/images/a.jpeg' alt='a' />
      <img src='/images/b.png' alt='a' />
      <img src='/vite.svg' alt='a' />

      <img src={b} alt='' />
      <img src={c} alt='' />

      <input
        onTouchStart={() => {
          console.log('asdad');
        }}
      /> */}
      <Hello />
      <Test />
    </div>
  );
}

export default App;
