/**
 * EJEMPLO DE USO - MascotaCard Component
 * 
 * El componente MascotaCard es reutilizable y se puede usar de varias formas:
 */

import MascotaCard from './components/MascotaCard';

// Ejemplo 1: Usar con datos del array mascotas
import { mascotas } from './data/mascotas';

export function EjemploBasico() {
  return (
    <div className="grid">
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
}

// Ejemplo 2: Usar con spread operator (más conciso)
export function EjemploSpreadOperator() {
  return (
    <div className="grid">
      {mascotas.map(mascota => (
        <MascotaCard key={mascota.id} {...mascota} />
      ))}
    </div>
  );
}

// Ejemplo 3: Uso con datos estáticos
export function EjemploConDatosEstaticos() {
  const perro = {
    nombre: 'Pelusa',
    raza: 'Mestizo',
    edad: 2,
    especie: 'Perro',
    descripcion: 'Cachorro juguetón y sociable, rescatado de la calle.',
    caracteristicas: ['vacunado', 'esterilizado', 'sociable']
  };

  return <MascotaCard {...perro} />;
}

// Ejemplo 4: Uso con características como string (se convierte automáticamente)
export function EjemploCaracteristicasString() {
  return (
    <MascotaCard
      nombre="Michi"
      raza="Siamés"
      edad={3}
      especie="Gato"
      descripcion="Gata tranquila que disfruta de los lugares cálidos."
      caracteristicas="vacunada, tímida, limpia"
    />
  );
}

/**
 * PROPIEDADES DEL COMPONENTE:
 * 
 * nombre (string, requerido)
 *   - Nombre de la mascota
 * 
 * raza (string, requerido)
 *   - Raza de la mascota
 * 
 * edad (number, requerido)
 *   - Edad en años
 * 
 * especie (string, requerido)
 *   - Valores válidos: "perro", "gato", "pajaro", "conejo", "hamster", "otro"
 *   - Se detecta automáticamente con flexibilidad (ej: "Perro", "GATO", etc.)
 * 
 * descripcion (string, opcional)
 *   - Descripción de la mascota
 *   - Valor por defecto: "No hay descripción disponible"
 * 
 * caracteristicas (array de strings O string, opcional)
 *   - Características/etiquetas de la mascota
 *   - Acepta array: ["vacunado", "sociable"]
 *   - O string: "vacunado, sociable" (se convierte automáticamente)
 *   - Valor por defecto: []
 * 
 * CARACTERÍSTICAS:
 * ✓ PropTypes para validación de tipos
 * ✓ Valores por defecto para evitar errores
 * ✓ Estilos diferenciados por especie (colores, iconos, etiquetas)
 * ✓ Renderiza contenido como JSX normal (NO dangerouslySetInnerHTML)
 * ✓ Sin credenciales o datos sensibles en el código
 * ✓ Responsive design
 * ✓ Transiciones y animaciones suaves
 */
