import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.css'],
})
export class GithubCardComponent {
  @Input() user: any;
  sponsors = [
    { name: 'Sponsor 1', image: 'https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg' },
    { name: 'Sponsor 2', image: 'https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg' },
    { name: 'Sponsor 3', image: 'https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg' },
    { name: 'Sponsor 4', image: 'https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg' },
    { name: 'Sponsor 5', image: 'https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg' },
    { name: 'Sponsor 6', image: 'https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg' },
    { name: 'Sponsor 7', image: 'https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg' },
    { name: 'Sponsor 8', image: 'https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg' },
    { name: 'Sponsor 9', image: 'https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg' },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = this.el.nativeElement.querySelector('#card');
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Köşe hesaplamaları
    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;

    // Köşe köşegenlerinin uzaklıkları ve dönüş hesaplamaları
    const rotateX = offsetY * 8; // Köşeye göre hafif bir dönüş
    const rotateY = offsetX * 8; // Köşeye göre hafif bir dönüş
    const translateZ = 15; // Kartı öne doğru kaldırmak için

    // Dönüş ve kaldırma efektini uygula
    this.renderer.setStyle(
      card,
      'transform',
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`
    );

    // Gradient arka plan için düzenleme
    const gradientSize = Math.min(rect.width, rect.height) / 0.7; // Daha geniş bir gradient
    this.renderer.setStyle(
      card,
      'background',
      `radial-gradient(circle at ${x}px ${y}px, rgba(128, 0, 128, 0.4), transparent ${gradientSize}px), #1f2937`
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const card = this.el.nativeElement.querySelector('#card');
    this.renderer.setStyle(
      card,
      'transform',
      'rotateX(0) rotateY(0) translateZ(0)'
    );
    this.renderer.setStyle(
      card,
      'background',
      '#1f2937' // Başlangıçta sadece siyah arka plan
    );
  }
}
