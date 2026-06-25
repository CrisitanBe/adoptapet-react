import ListaMascotas from './components/ListaMascotas'
import { mascotas } from './data/mascotas'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🐾 AdoptaPet</h1>
        <p>Encuentra tu compañero perfecto</p>
      </header>

      <main className="app-main">
        <ListaMascotas mascotas={mascotas} />
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 AdoptaPet - Encuentra un hogar para tu mascota</p>
      </footer>
    </div>
  )
}

export default App
