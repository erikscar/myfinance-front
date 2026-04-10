import { Component, signal } from '@angular/core';
import { Welcome } from "./pages/welcome/welcome";

@Component({
  selector: 'app-root',
  imports: [Welcome],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myfinance-front');
}
