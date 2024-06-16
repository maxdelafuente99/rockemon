import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, NgIf],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  public sidebarnavItems = [
    {
      title: 'Pokemon',
      path: '/inicio/pokemon',
      icon: 'bi bi-bug', // Puedes usar cualquier icono que desees
      class: '',
      extralink: false,
      submenu: []
    },
    {
      title: 'Rick and Morty',
      path: '/inicio/rickandmorty',
      icon: 'bi bi-mortarboard', // Puedes usar cualquier icono que desees
      class: '',
      extralink: false,
      submenu: []
    }
  ];

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  addExpandClass(element: string) {
    this.showMenu = this.showMenu === element ? '' : element;
  }

  ngOnInit() {}
}
