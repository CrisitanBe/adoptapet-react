import { useState } from 'react'
import ListaMascotas from './components/ListaMascotas'
import FiltroEspecie from './components/FiltroEspecie'
import { mascotas } from './data/mascotas'
import './App.css'

function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('')
  const [busqueda, setBusqueda] = useState('')

  // Normalizar y validar el texto de búsqueda
  const normalizarBusqueda = (texto) => {
    return texto
      .trim() // Eliminar espacios al inicio y final
      .toLowerCase() // Convertir a minúsculas
      .replace(/\s+/g, ' ') // Reemplazar espacios múltiples por uno solo
  }

  // Manejar cambio en el campo de búsqueda (componente controlado)
  const handleBusquedaChange = (e) => {
    const textoBruto = e.target.value
    setBusqueda(textoBruto)
  }

  // Aplicar filtros al array de mascotas
  const mascotasFiltradas = mascotas.filter(mascota => {
    // Filtro por especie
    const cumpleFiltroEspecie =
      !filtroEspecie || mascota.especie.toLowerCase() === filtroEspecie.toLowerCase()

    // Filtro por nombre (búsqueda normalizada)
    const busquedaNormalizada = normalizarBusqueda(busqueda)
    const nombreNormalizado = mascota.nombre.toLowerCase()
    const cumpleBusqueda = !busquedaNormalizada || nombreNormalizado.includes(busquedaNormalizada)

    // Ambos filtros deben cumplirse
    return cumpleFiltroEspecie && cumpleBusqueda
  })

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🐾 AdoptaPet</h1>
        <p>Encuentra tu compañero perfecto</p>
      </header>

      <main className="app-main">
        {/* Sección de filtros */}
        <div className="filtros-container">
          {/* Filtro por especie */}
          <FiltroEspecie
            filtroSeleccionado={filtroEspecie}
            onFiltroChange={setFiltroEspecie}
          />

          {/* Campo de búsqueda por nombre */}
          <div className="busqueda-container">
            <label htmlFor="busqueda-input" className="busqueda-label">
              Buscar por nombre:
            </label>
            <input
              id="busqueda-input"
              type="text"
              className="busqueda-input"
              placeholder="Ej: Pelusa, Michi, Rocky..."
              value={busqueda}
              onChange={handleBusquedaChange}
            />
          </div>
        </div>

        {/* Renderizado condicional: mostrar resultados o mensaje de no hay mascotas */}
        {mascotasFiltradas.length > 0 ? (
          <>
            <p className="resultados-info">
              Se encontraron {mascotasFiltradas.length} mascota{mascotasFiltradas.length !== 1 ? 's' : ''}
            </p>
            <ListaMascotas mascotas={mascotasFiltradas} />
          </>
        ) : (
          <div className="no-resultados">
            <p className="no-resultados-mensaje">
              😔 No hay mascotas que coincidan con tu búsqueda
            </p>
            <p className="no-resultados-sugerencia">
              Intenta ajustar los filtros o buscar otro nombre
            </p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 AdoptaPet - Encuentra un hogar para tu mascota</p>
      </footer>
    </div>
  )
}

export default App
