import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'jsonHtml',
    standalone: true
})
export class JsonHtmlPipe implements PipeTransform {
    transform(pais: {
        nombre?: string,
        imagen?: { src?: string },
        poblacion?: string,
        continente?: string,
        energia?: any,
        impacto?: any
    }): string {
        if (!pais) return '<p>Información no disponible</p>';

        return `
      <div>
        ${pais.imagen?.src ? `<img src="${pais.imagen.src}" height="50">` : ''}
        <h3>${pais.nombre || 'Desconocido'}</h3>
        <p><strong>Continente:</strong> ${pais.continente || 'No especificado'}</p>
        
        <h4>Energía</h4>
        <ul>
          ${this.formatEnergia('Solar', pais.energia?.solar)}
          ${this.formatEnergia('Eólica', pais.energia?.eolica)}
          ${this.formatEnergia('Hidráulica', pais.energia?.hidraulica)}
          ${this.formatEnergia('Biomasa', pais.energia?.biomasa)}
        </ul>
  
        <h4>Impacto</h4>
        <p><strong>Reducción de CO2:</strong> ${pais.impacto?.reduccion_gases_invernadero_tonCO2 || 0} toneladas</p>
        <p><strong>Dependencia fósil:</strong> ${pais.impacto?.dependencia_combustibles_fosiles || 'Desconocida'}</p>
        <p><strong>Políticas necesarias:</strong> ${(pais.impacto?.politicas_necesarias || []).join(', ') || 'Ninguna'}</p>
  
        <h4>Beneficios</h4>
        <p><strong>Económicos:</strong> ${pais.impacto?.beneficios?.economicos || 'No especificado'}</p>
        <p><strong>Medioambientales:</strong> ${pais.impacto?.beneficios?.medioambientales || 'No especificado'}</p>
        <p><strong>Sociales:</strong> ${pais.impacto?.beneficios?.sociales || 'No especificado'}</p>
      </div>
    `;
    }

    private formatEnergia(tipo: string, energia: any): string {
        if (!energia) return '';
        return `
      <li><strong>${tipo}:</strong> ${energia.produccion_total_MWh || 0} MWh</li>
      <li>Plantas: ${(energia.plantas_principales || []).join(', ') || 'Ninguna'}</li>
    `;
    }
}
