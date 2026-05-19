import { Component, signal } from '@angular/core';
import { Welcome } from "./pages/welcome/welcome";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myfinance-front');
}
