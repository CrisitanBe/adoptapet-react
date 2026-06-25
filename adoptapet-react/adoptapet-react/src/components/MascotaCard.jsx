import PropTypes from 'prop-types';
import '../styles/MascotaCard.css';

const MascotaCard = ({
  nombre,
  raza,
  edad,
  especie,
  descripcion,
  caracteristicas,
  adopcionUrgente
}) => {
  // Mapeo de estilos por especie
  const especieEstilos = {
    perro: {
      clase: 'mascota-card--perro',
      color: '#8B4513',
      icono: '🐕',
      etiqueta: 'Perro'
    },
    gato: {
      clase: 'mascota-card--gato',
      color: '#FF8C00',
      icono: '🐱',
      etiqueta: 'Gato'
    },
    pajaro: {
      clase: 'mascota-card--pajaro',
      color: '#FFD700',
      icono: '🦜',
      etiqueta: 'Pájaro'
    },
    ave: {
      clase: 'mascota-card--pajaro',
      color: '#FFD700',
      icono: '🦜',
      etiqueta: 'Pájaro'
    },
    conejo: {
      clase: 'mascota-card--conejo',
      color: '#FFB6C1',
      icono: '🐰',
      etiqueta: 'Conejo'
    },
    hamster: {
      clase: 'mascota-card--hamster',
      color: '#A0522D',
      icono: '🐹',
      etiqueta: 'Hámster'
    },
    otro: {
      clase: 'mascota-card--otro',
      color: '#696969',
      icono: '🐾',
      etiqueta: 'Mascota'
    }
  };

  // Detectar especie y ser flexible con los valores
  const detectarEspecie = () => {
    const esp = especie?.toLowerCase().trim() || '';
    
    // Búsqueda directa
    if (especieEstilos[esp]) return esp;
    
    // Búsqueda parcial en las características
    if (Array.isArray(caracteristicas)) {
      const caracs = caracteristicas.join(' ').toLowerCase();
      if (caracs.includes('conejo')) return 'conejo';
      if (caracs.includes('pajaro') || caracs.includes('ave') || caracs.includes('cacatúa')) return 'pajaro';
      if (caracs.includes('hamster')) return 'hamster';
    }
    
    return 'otro';
  };

  const especieNormalizada = detectarEspecie();
  const estilo = especieEstilos[especieNormalizada] || especieEstilos.otro;

  // Procesar características como array si es necesario
  const caracteristicasArray = Array.isArray(caracteristicas)
    ? caracteristicas
    : caracteristicas?.split(',').map(c => c.trim()).filter(Boolean) || [];

  return (
    <div className={`mascota-card ${estilo.clase} ${adopcionUrgente ? 'mascota-card--urgente' : ''}`}>
      {/* Badge de adopción urgente */}
      {adopcionUrgente && (
        <div className="mascota-card__urgente-badge">
          🚨 ¡ADOPCIÓN URGENTE!
        </div>
      )}

      {/* Encabezado con etiqueta de especie */}
      <div className="mascota-card__header">
        <span className="mascota-card__badge" style={{ backgroundColor: estilo.color }}>
          {estilo.icono} {estilo.etiqueta}
        </span>
      </div>

      {/* Contenido principal */}
      <div className="mascota-card__content">
        {/* Nombre */}
        <h2 className="mascota-card__nombre">{nombre}</h2>

        {/* Información básica */}
        <div className="mascota-card__info-basica">
          <div className="info-item">
            <span className="info-label">Raza:</span>
            <span className="info-valor">{raza}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Edad:</span>
            <span className="info-valor">{edad} años</span>
          </div>
        </div>

        {/* Descripción */}
        {descripcion && (
          <div className="mascota-card__descripcion">
            <p>{descripcion}</p>
          </div>
        )}

        {/* Características */}
        {caracteristicasArray.length > 0 && (
          <div className="mascota-card__caracteristicas">
            <label className="caracteristicas-label">Características:</label>
            <div className="caracteristicas-lista">
              {caracteristicasArray.map((caracteristica, index) => (
                <span key={index} className="caracteristica-tag">
                  {caracteristica}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

MascotaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  raza: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  especie: PropTypes.oneOf(['perro', 'gato', 'pajaro', 'conejo', 'hamster', 'otro'])
    .isRequired,
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  adopcionUrgente: PropTypes.bool
};

MascotaCard.defaultProps = {
  descripcion: 'No hay descripción disponible',
  caracteristicas: [],
  adopcionUrgente: false
};

export default MascotaCard;
