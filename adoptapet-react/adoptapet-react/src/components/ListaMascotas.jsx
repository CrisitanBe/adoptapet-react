import PropTypes from 'prop-types';
import MascotaCard from './MascotaCard';

const ListaMascotas = ({ mascotas }) => {
  if (!mascotas || mascotas.length === 0) {
    return (
      <div className="lista-mascotas-vacia">
        <p>No hay mascotas disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="mascotas-grid">
      {mascotas.map(mascota => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
        />
      ))}
    </div>
  );
};

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      raza: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired,
      especie: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
      caracteristicas: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string
      ])
    })
  ).isRequired
};

ListaMascotas.defaultProps = {
  mascotas: []
};

export default ListaMascotas;
