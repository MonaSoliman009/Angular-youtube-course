import { Directive, ElementRef, HostBinding, HostListener, input, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  @Input() highlightColor:string='red'
  @Input() defaultColor:string='green'

  //  defaultColor=input('red')
  //  highlightColor=input('green')

  // constructor(private ele: ElementRef,private render2:Renderer2) {
  //   // ele.nativeElement.style.backgroundColor='green'
  // }

  @HostBinding('style.background-color')
  bgColor=''

  // @HostBinding('class.active')
  // x=false

  // @HostBinding('hidden')
  // y=true

  @HostListener('mouseover')
  mouseover() {
    // this.ele.nativeElement.style.backgroundColor = '#09c'
    // this.render2.setStyle(this.ele.nativeElement,'background-color',this.highlightColor)
    this.bgColor=this.highlightColor
  }

  @HostListener('mouseout')
  mouseOut() {
    // this.ele.nativeElement.style.backgroundColor = '#ffff'
    // this.render2.setStyle(this.ele.nativeElement,'background-color',this.defaultColor)
    this.bgColor=this.defaultColor
  }
}


//new Highlight(el)
