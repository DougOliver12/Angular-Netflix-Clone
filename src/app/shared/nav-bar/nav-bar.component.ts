import {OnInit, Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    opened = false;
    constructor(){
    }
    ngOnInit(): void {
    }
    toggle(){
      this.opened = !this.opened;
    }
}
