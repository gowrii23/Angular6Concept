import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Input
} from "@angular/core";

@Directive({
  selector: "[appHighLight]"
})
export class HighLightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input()
  color: string;

  @HostListener("mouseover")
  over() {
    this.renderer.setStyle(
      this.el.nativeElement,
      "backgroundColor",
      this.color
    );
  }

  @HostListener("mouseout")
  out() {
    this.renderer.setStyle(
      this.el.nativeElement,
      "backgroundColor",
      "transparent"
    );
  }
}
