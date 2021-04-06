import { RolesComponent } from './../roles/roles.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RolInterface } from './../../../interfaces/rol';
import { UserInterface } from './../../../interfaces/user';

import { ServiceService } from './../../../service/service.service';

import Swal from 'sweetalert2';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userInterface:UserInterface = new UserInterface();
  roles:RolInterface [] = [];
  users:UserInterface [] = [];
  update:boolean = false;

  constructor(private modalService:NgbModal, private _service:ServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._service.getUsers().subscribe((resp) =>{
      this.users = resp;
      this.getRoles();
    });
  }

  deleteUser(id:number,nombre:string){
    this._service.deleteUser(id).subscribe(resp=>{
      if(resp){
        Swal.fire({
          title: "El Usuario " + nombre,
         text: "Se creo eliminó correctamente",
         icon: "success"
        });
        this.getUsers();
      }
    });
  }

  searchUser(id:number,content){
    this._service.searchUser(id).subscribe(resp=>{
      this.userInterface = resp[0];
      this.update = true;
      this.open(content);
    })
  }

  updateUser(){
    Swal.fire({
      title:'Actualizando Informaciòn',
      text:'Espere un momento por favor',
      icon:'info',
      allowOutsideClick:false
    });

    Swal.showLoading();

    this._service.updateUser(this.userInterface).subscribe(resp=>{
      Swal.fire({
        title: "El Usuario " + this.userInterface.nombre,
       text: "Se creo actualizó correctamente",
       icon: "success"
      });
      this.modalService.dismissAll();
      this.getUsers();
    });
  }

  getRoles(){
    this._service.getRoles().subscribe((resp) =>{
      this.roles = resp;
    });
  }

  open(content) {
    this.modalService.open(content, { size: 'md' , windowClass : 'modal-codesa' , backdrop: 'static' });
  }

  guardarUsuario(f:NgForm){

    this.modalService.dismissAll();

    if(f.invalid){
      Swal.fire({
        title:'ERROR',
        text:'Todos los campos deben estar llenos o validos',
        icon:'error'
      });
    return;
    }

    const validarNombre = this.users.filter(u => u.nombre == this.userInterface.nombre);

    console.log(validarNombre);

    if (validarNombre.length != 0){
      Swal.fire({
        title:'ERROR',
        text:`El usuario ${validarNombre[0]['nombre']} ya se encuentra creado`,
        icon:'error'
      });
      return;

    }else{

      Swal.fire({
        title:'Guardando información',
        text:'Espere un momento por favor',
        icon:'info',
        allowOutsideClick:false
      });

      Swal.showLoading();

      this._service.createUser(this.userInterface).subscribe(resp=>{

        Swal.fire({
          title: "El Usuario " + resp['nombre'],
         text: "Se creo correctamente",
         icon: "success"
        });

        this.getUsers();

      });

    }

  }

}