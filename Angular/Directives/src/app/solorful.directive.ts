import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appSolorful]'
})
export class SolorfulDirective {

  availableColors = ['#A13333', '#EFCFCF', '#C67373', '#780404', '#530000', 'red', 'green', 'blue', 'black', 'orange', 'purple', 'gray', 'yellow'];

  @HostBinding('style.color') color: string = '';
  @HostBinding('style.border-color') borderColor: string = '';
  @HostListener('keydown') newColor() {
    const randomColorIndex = Math.floor(Math.random() * this.availableColors.length);
    this.color = this.borderColor = this.availableColors[randomColorIndex];
  }


}
