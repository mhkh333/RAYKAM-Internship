import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';

  s = 'https://www.babol-carpet.com/fa/product/%D8%AE%D9%88%D8%AF%D8%B1%D9%88/%DA%A9%D9%81%D9%BE%D9%88%D8%B4-%DA%A9%D8%A7%D8%A8%DB%8C%D9%86/%DA%A9%D9%81%D9%BE%D9%88%D8%B4-%D8%B3%D9%87-%D8%A8%D8%B9%D8%AF%DB%8C-%D9%84%D8%A7%DA%A9%DA%86%D8%B1%DB%8C/3285-%DA%A9%D9%81%D9%BE%D9%88%D8%B4-%D8%B3%D9%87-%D8%A8%D8%B9%D8%AF%DB%8C-%D9%84%D8%A7%DA%A9%DA%86%D8%B1%DB%8C-%DA%86%D8%B1%DB%8C-%D8%AA%DB%8C%DA%AF%D9%88-7-%D9%BE%D8%B1%D9%88.html';


  ss = 'https://www.babol-carpet.com/fa/product/%D8%AE%D9%88%D8%AF%D8%B1%D9%88/%DA%A9%D9%81%D9%BE%D9%88%D8%B4-%DA%A9%D8%A7%D8%A8%DB%8C%D9%86/%DA%A9%D9%81%D9%BE%D9%88%D8%B4-%D8%B3%D9%87-%D8%A8%D8%B9%D8%AF%DB%8C-%D9%84%D8%A7%DA%A9%DA%86%D8%B1%DB%8C/3285-%DA%A9%D9%81%D9%BE%D9%88%D8%B4-%D8%B3%D9%87-%D8%A8%D8%B9%D8%AF%DB%8C-%D9%84%D8%A7%DA%A9%DA%86%D8%B1%DB%8C-%DA%86%D8%B1%DB%8C-%D8%AA%DB%8C%DA%AF%D9%88-7-%D9%BE%D8%B1%D9%88.html';

  ngOnInit(){
    if(this.s === this.ss){
      console.log()
    }
    console.log()
  }

}
