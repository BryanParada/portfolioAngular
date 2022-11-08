import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface menuItem {
  route: string;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

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
    {route: '/portfolio/home', text: 'Home', icon: 'equalizer'} 

  ];
 

}
