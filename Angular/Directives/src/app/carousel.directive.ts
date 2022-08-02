import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ICarouselContext} from "./interfaces/app-interface";

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  context: ICarouselContext | null = null;
  index: number = 0;

  constructor(private templateRef: TemplateRef<ICarouselContext>,
              private viewContainerRec: ViewContainerRef) {

  }

  @Input('appCarouselFrom') images: string[] | any;

  timer: any;

  @Input('appCarouselAutoplay')
  set autoplay(value: string){
    value === 'No' ? this.clearAuto() : this.playAuto();
  };

  public ngOnInit() {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    }

    this.viewContainerRec.createEmbeddedView(this.templateRef, this.context);
  }

  public next() {
    this.index++;
    if (this.index >= this.images.lenght) {
      this.index = 0;
    }
    // @ts-ignore
    this.context.$implicit = this.images[this.index];
  }

  public prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.lenght - 1;
    }

    // @ts-ignore
    this.context.$implicit = this.images[this.index];
  }

  public playAuto() {
    this.timer = setInterval(() => {
      this.next();
    }, 1000);
  }

  public clearAuto(){
    clearInterval(this.timer);
  }
}
