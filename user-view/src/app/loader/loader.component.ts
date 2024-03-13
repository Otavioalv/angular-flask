import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})

export class LoaderComponent {
  constructor(
    public loaderService: LoaderService
  ) {}
}
