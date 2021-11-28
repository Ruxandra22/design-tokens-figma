import './App.css';

function App() {
  return (
    <div className='p-4 container mx-auto'>
      <div className="flex flex-row">
        <div className="flex flex-col space-y-4 px-2">
          <p>Buttons</p>
          <button className='btn btn-primary700 block'> Primary 700 button</button>
          <button className='btn btn-primary600 block'> Primary 600 button</button>
          <button className='btn btn-primary500 block'> Primary 500 button</button>
        </div>

        <div className="flex flex-col space-y-4">
          <p>Typography</p>
          <button className='btn btn-primary700 block'> Primary 700 button</button>
          <button className='btn btn-primary600 block'> Primary 600 button</button>
          <button className='btn btn-primary500 block'> Primary 500 button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
