import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  bind(arg0: this) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:8080/angularPhp/';

  constructor(private http: HttpClient) { }

  /**
   * Metodo para realizar la llamada a la table mediante el php
   * mostrarTodos
   */
  recuperarTodo() {
    return this.http.get(`${this.url}mostrarTodos.php`);
  } 

  /**
   * Metodo para realizar la llamada a la table mediante el php 
   * alta
   * @param articulo 
   */
  alta(articulo){
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));
  }

  /**
   * Metodo para realizar la llamada a la tabla mediente el php
   * baja
   * @param codigo 
   */
  baja(codigo: number){
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }

  /**
   * Metodo para conectar con php de modificacion
   * @param articulo objeto 
   */
  modificacion(articulo) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  } 

  /**
   * Metodo para conectar con php seleccionar 
   * @param codigo 
   */
  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  /**
   * Metodo para conectar con php buscar
   * @param descripcion 
   */
  buscar(codigo:number) {
    return this.http.get(`${this.url}buscar.php?codigo=${codigo}`);
  }

}
