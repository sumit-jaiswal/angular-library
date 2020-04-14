import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sj-magic-string',
  template: `
    <p>
      magic-string works! {{text}} test
    </p>
  `,
  styles: [
  ],
})
export class MagicStringComponent implements OnInit {

  @Input() text: string;
  constructor() { }

  ngOnInit(): void {
  }

}
