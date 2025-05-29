import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,HeroComponent,AboutComponent,WorkComponent,ContactComponent,FooterComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
  
export class AppComponent {
  title = 'Portfolio';
}
