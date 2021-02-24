import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'conexionMysql';
  articulos = null;
  textoDeInput: number = null;

  art={
    codigo: null,
    descripcion: null,
    precio: null
  }

  constructor(
    private articulosServicio: ArticulosService){}

  ngOnInit() {
    this.recuperarTodo();
  }

  /**
   * Metodo para realizar la llamada al servicio y mostrar todo el contenido
   * de la tabla
   */
  recuperarTodo() {
    this.articulosServicio.recuperarTodo().subscribe(result => 
      this.articulos = result);
  }  

  /**
   * Metodo para realizar la llamada al servicio y añadir un nuevo dato
   * en la tabla
   */
  anadir(){
      this.articulosServicio.alta(this.art).subscribe(datos => {
        if(datos['resultado'] == 'OK'){
          alert(datos['mensaje']);
          this.recuperarTodo();
          //reseteamos los valores de sus input 
          this.art.descripcion = "";
          this.art.precio = "";
        }
      });
  }

  /**
   * Metodo para realizar la llamada al servicio y eliminar el dato
   * @param codigo Parametro identificar unico
   */
  eliminar(codigo){
    this.articulosServicio.baja(codigo).subscribe(datos =>{
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.recuperarTodo();
        //reseteamos los valores de sus input 
        this.art.descripcion = "";
        this.art.precio = "";
      }
    });
  }

  /**
   * Metodo para realizar llamada al servicio para modificar
   */
  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodo();
      }
    });    
  }

  /**
   * Metodo para realizar llamada al servicio y seleccionar el dato
   * @param codigo Parametro codigo identificador
   */
  seleccionar(codigo) {
    this.articulosServicio.seleccionar(codigo).subscribe(result => 
      this.art = result[0]);
  }

  //metodo para resetear los imput
  limpiarCampos(){
    this.art.descripcion = "";
    this.art.precio = "";
  }

  hayRegistros() {
    return true;
  }


  buscador() {
    this.articulosServicio.buscar(this.textoDeInput).subscribe(result => 
      this.articulos = result);
      console.log(this.textoDeInput);
  }
}
