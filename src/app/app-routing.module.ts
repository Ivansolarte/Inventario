import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ContactosComponent } from './contactos/contactos.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioDetalleComponent } from './inventario/inventario-detalle.component';
import { InventarioListaComponent } from './inventario/inventario-lista.component';




const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'clientes', component: ClienteComponent},
    { path: 'contactos', component: ContactosComponent},
    { path: 'inventario', component: InventarioComponent,
        children: [
            { path: '', redirectTo: 'Lista', pathMatch: 'full'},
            { path: 'lista', component: InventarioListaComponent},
            { path: 'detalle', component: InventarioDetalleComponent},
            { path: 'detalle/:id', component: InventarioDetalleComponent},
        ]
},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
