import {Input, Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-toptitle',
  templateUrl: './toptitle.component.html',
  styleUrls: ['./toptitle.component.scss']
})
export class ToptitleComponent implements OnInit {
  @Input() pageTitle: string;

  ngOnInit() {

  }
}
