import PropTypes from 'prop-types';
import '../styles/FiltroEspecie.css';

const FiltroEspecie = ({ filtroSeleccionado, onFiltroChange }) => {
  const especies = [
    { valor: '', etiqueta: 'Todas las especies' },
    { valor: 'perro', etiqueta: 'Perros' },
    { valor: 'gato', etiqueta: 'Gatos' },
    { valor: 'pajaro', etiqueta: 'Pájaros' },
    { valor: 'conejo', etiqueta: 'Conejos' },
    { valor: 'hamster', etiqueta: 'Hámsters' },
    { valor: 'otro', etiqueta: 'Otros' }
  ];

  return (
    <div className="filtro-especie">
      <label htmlFor="filtro-select" className="filtro-label">
        Filtrar por especie:
      </label>
      <select
        id="filtro-select"
        className="filtro-select"
        value={filtroSeleccionado}
        onChange={(e) => onFiltroChange(e.target.value)}
      >
        {especies.map(especie => (
          <option key={especie.valor || 'todas'} value={especie.valor}>
            {especie.etiqueta}
          </option>
        ))}
      </select>
    </div>
  );
};

FiltroEspecie.propTypes = {
  filtroSeleccionado: PropTypes.string.isRequired,
  onFiltroChange: PropTypes.func.isRequired
};

export default FiltroEspecie;
