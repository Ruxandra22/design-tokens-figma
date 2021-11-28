import './App.css';

function App() {
  return (
    <div className='p-4 container mx-auto'>
      <div className="flex flex-row">
        <div className="flex flex-col space-y-4 px-8">
          <p>Buttons</p>
          <button className='btn btn-primary700 block'> Primary 700 button</button>
          <button className='btn btn-primary600 block'> Primary 600 button</button>
          <button className='btn btn-primary500 block'> Primary 500 button</button>
        </div>

        <div className="flex flex-col space-y-4">
          <p>Typography</p>
          <h1>H1 Heading</h1>
          <h2>H2 Heading</h2>
          <h3>H3 Heading</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
