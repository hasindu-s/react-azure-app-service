import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          A React app to test the deployment to Azure App Service via GitHub
          Actions
        </p>
      </header>
    </div>
  )
}

export default App
