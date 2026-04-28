import { Component } from '@angular/core';
import { CustomImage } from '../../Interfaces/CustomImage';
import { NgStyle } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-welcome',
  imports: [NgStyle, RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class Welcome {
  items: CustomImage[] = [
    {
      path: "assets/chart-icon.png",
      alt: "Chart Icon"
    },
    {
      path: "assets/pig-icon.png",
      alt: "Pig Icon"
    },
    {
      path: "assets/calc-icon.png",
      alt: "Calculator Icon"
    },
  ]
  
  activeIndex = 1;

  onCarrouselScroll(event: Event) {
  const element = event.target as HTMLElement;

  const itemWidth = element.offsetWidth;
  
  const scroll = element.scrollLeft;
  
  this.activeIndex = Math.floor(scroll/ itemWidth) + 1;
  }
}
