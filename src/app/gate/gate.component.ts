import { SkillsService } from '../services/skills.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.css'],
  providers: [SkillsService]
})

export class GateComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}