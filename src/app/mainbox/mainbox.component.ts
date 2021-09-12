import {Component} from '@angular/core';

@Component({
  selector: 'app-mainbox',
  templateUrl: './mainbox.component.html',
  styleUrls: ['./mainbox.component.css']
})

export class MainboxComponent {
  public firstTitle: string;
  public secondTitle: string;
  public socialMedia: any;
  public apps: any;

  constructor() {
    this.firstTitle = "Blixmark";
    this.secondTitle = "Custom Software Development";
    this.socialMedia = [
      {
      "title": "facebook",
      "link": "https://www.facebook.com/blixmark/"
      },
      {
        "title": "instagram",
        "link": "https://www.instagram.com/blixmark/"
      },
      {
        "title": "twitter",
        "link": "https://www.twitter.com/blixmark/"
      },
      {
        "title": "linkedin",
        "link": "https://www.linkedin.com/company/blixmark/"
      },
      {
        "title": "github",
        "link": "https://github.com/hrvanovic/"
      },
      {
        "title": "phone",
        "link": "tel:387603065634"
      },
      {
        "title": "email",
        "link": "mailto:hrvanovic.dev@gmail.com"
      }]

    this.apps = [
      {
        "title": "CryptPad",
        "link": "http://crypt.blixmark.com"
      }
    ]
  }
}
