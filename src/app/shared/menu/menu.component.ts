import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface menuItem {
  route: string;
  text: string;
  icon: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {


  @ViewChild('navMenu') navmenu!: ElementRef;
  @ViewChild('navToggle') navtoggle!: ElementRef;
  @ViewChild('navClose') navclose!: ElementRef;
 
  constructor() { }

  ngOnInit(): void {
  }

  openMenu () {
    if(this.navtoggle){ this.navmenu.nativeElement.classList.add('show-menu');   }
  }

  closeMenu() {
    if(this.navclose){ this.navmenu.nativeElement.classList.remove('show-menu'); }
  }

  menu: menuItem[] = [
    {route: '/portfolio/home', text: 'Home', icon: 'uil uil-home nav__icon'} ,
    {route: '/portfolio/about-me', text: 'About Me', icon: 'uil uil-user nav__icon'}, 
    {route: '/portfolio/skills', text: 'Skills', icon: 'uil uil-file nav__icon'}, 
    {route: '/portfolio/services', text: 'Services', icon: 'uil uil-briefcase-alt nav__icon'}, 
    {route: '/portfolio/portfolio', text: 'Portfolio', icon: 'uil uil-scenery nav__icon'}, 
    {route: '/portfolio/contact', text: 'Contact Me', icon: 'uil uil-message nav__icon'}

  ];
 

}
