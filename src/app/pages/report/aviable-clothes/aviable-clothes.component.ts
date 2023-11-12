import { Component, Input } from '@angular/core';
import { ReportModel } from 'src/app/models/ReportModel';

@Component({
  selector: 'app-aviable-clothes',
  templateUrl: './aviable-clothes.component.html',
  styleUrls: ['./aviable-clothes.component.css'],
})
export class AviableClothesComponent {
  @Input() report?: ReportModel;
  data: any;
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    this.data = {
      labels: ['Disponible', 'Donados'],
      datasets: [
        {
          data: [
            this.report?.clothesDonate.isAviable ?? 0,
            this.report?.clothesDonate.isDonated ?? 0,
          ],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
          ],
        },
      ],
    };
  }
}
