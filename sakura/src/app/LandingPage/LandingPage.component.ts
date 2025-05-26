import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section>
        <h1>SAKURA RAMEN</h1>
        <h2>BEST RAMEN IN TOWN</h2>
    </section>
        `,
    styleUrls: ['./LandingPage.component.scss']    

})

export class LandingPageComponent {

}