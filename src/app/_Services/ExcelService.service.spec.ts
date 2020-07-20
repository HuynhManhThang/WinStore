/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExcelServiceService } from './ExcelService.service';

describe('Service: ExcelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcelServiceService]
    });
  });

  it('should ...', inject([ExcelServiceService], (service: ExcelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
