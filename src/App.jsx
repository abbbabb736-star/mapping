import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <nav className="nav">
      
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

<p>v19.2</p>

<form action="">
  <input type="text" placeholder='Search'
  
  />
</form>

<ul>
  <li>
    Learn
  </li>
  <li>
    Reference
  </li>
  <li>
    Community
  </li>
  <li>
    Blog
  </li>

</ul>


      </nav>

      <div className="hero">

             <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1> React</h1>
      <p>The library for web and native user interfaces</p>
      <div className="buttons">
        <button >
          Learn React
        </button>
        <button >
          API Reference
        </button>
   </div>
      </div>
   
    </>
  )
}

export default App
