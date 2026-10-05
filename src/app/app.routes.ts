import { Routes } from '@angular/router';
import { FormulasMedicasComponent } from './formulas-medicas/formulas-medicas.component';
import { CitasComponent } from './citas/citas.component';
import { HistoriasMedicasComponent } from './historias-medicas/historias-medicas.component';
import { AnotacionesComponent } from './anotaciones/anotaciones.component';

export const routes: Routes = [
  { path: '', redirectTo: 'citas', pathMatch: 'full' },
  { path: 'formulas-medicas', component: FormulasMedicasComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'historias-medicas', component: HistoriasMedicasComponent },
  { path: 'historias-medicas/:historiaMedicaId/anotaciones', component: AnotacionesComponent },
  { path: '**', redirectTo: 'citas' }
];
