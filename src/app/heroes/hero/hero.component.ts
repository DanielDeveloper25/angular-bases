import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age: number = 45;

  get capitalizedName(){
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'SpiderMan';
  }

  changeAge(): void{
    this.age = 21;
  }

  resetForm(): void{
    this.name = 'ironMan',
    this.age = 45

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML= '<h1>Desde angular</h1>'
    // });
  }
}
