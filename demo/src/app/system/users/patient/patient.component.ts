import {Component, OnInit, Input} from '@angular/core'

import {Item} from "../../shared/models/item.model";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
 @Input() sites: string[];
  ngOnInit() {
  }

}
