import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  caption: string;
  headings: string[];
  footers: string[];
  columns: Array<Array<string>>;

  constructor() { }

  ngOnInit() {
    this.caption = 'Oversigt over hovedforløb 1';
    this.headings = ['Fag nr.', 'Titel', 'EUD & EUV 3', 'EUV 1 & 2', 'EUX'];
    this.footers = ['', 'Antal Uger', '10', '10', '11'];
    this.columns = [
      [
        '16471',
        'Grundlæggende programmering',
        '2',
        '2',
        '2'
      ],
      [
        '16476',
        'Clientside programmering',
        '1',
        '1',
        '1'
      ],
      [
        '16474',
        'Database programming',
        '1',
        '1',
        '1'
      ],
      [
        '16483',
        'Versionering og dokumentation',
        '0,5',
        '0,5',
        '0,5'
      ],
      [
        '6223',
        'Netværk I',
        '1,5',
        '1,5',
        '1,5'
      ],
      [
        '6225',
        'Computerteknologi',
        '1',
        '1',
        '1'
      ],
      [
        '6226',
        'Serverteknologi I',
        '0',
        '0',
        '1'
      ],
      [
        '6230',
        'Database Server',
        '1',
        '1',
        '1'
      ]
    ];
  }

}
