import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-test';

  toggleModal() {
    const modal : any = document.querySelector('.modal');

    modal.classList.toggle('modal--active');
  };
}
