import { Component } from '@angular/core';

export class Zodiac {
  id: number;
  name: string;
  range: any[];
}

const ZODIACS: Zodiac[] = [
  { id: 1, name: 'Aquarius', range: ['01-20', '02-18'] },
  { id: 2, name: 'Pisces', range: ['02-19', '03-20'] },
  { id: 3, name: 'Aries', range: ['03-21', '04-19'] },
  { id: 4, name: 'Taurus', range: ['04-20', '05-20'] },
  { id: 5, name: 'Gemini', range: ['05-21', '06-20'] },
  { id: 6, name: 'Cancer', range: ['06-21', '07-22'] },
  { id: 7, name: 'Leo', range: ['07-23', '08-22'] },
  { id: 8, name: 'Virgo', range: ['08-23', '09-22'] },
  { id: 9, name: 'Libra', range: ['09-23', '10-22'] },
  { id: 10, name: 'Scorpio', range: ['10-23', '11-21'] },
  { id: 10, name: 'Sagittarius', range: ['11-22', '12-21'] },
  { id: 10, name: 'Capricorn', range: ['12-22', '01-19'] }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ZODIACS';
  zodiacs = ZODIACS;
  selZodiac: Zodiac;
  birthDate: string;
  birthDateStamp: Date;

  onSelect(zodiac: Zodiac): void {
    this.selZodiac = zodiac;
  };

  changeBirthDate(birthDate: string): void {
    this.birthDateStamp = new Date(birthDate);
    this.calculateZodiacFromMonthDay();
  }

  calculateZodiacFromMonthDay() {
    this.selZodiac = null;
    this.zodiacs.forEach(function(zodiac) {
      let birthDateYear = this.birthDateStamp.getFullYear()
      let zodiacRangeStart = new Date(birthDateYear + '-' + zodiac.range[0])
      let zodiacRangeEnd = new Date(birthDateYear + '-' + zodiac.range[1])

      if(this.birthDateStamp >= zodiacRangeStart
          && this.birthDateStamp <= zodiacRangeEnd) {
        this.selZodiac = zodiac;
      }
    }, this);
  }
}
