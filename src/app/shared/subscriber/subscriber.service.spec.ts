import { TestBed, inject } from '@angular/core/testing';

import { SubscriberService } from './Subscriber.service';

describe('SubscriberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriberService]
    });
  });

  it('should be created', inject([SubscriberService], (service: SubscriberService) => {
    expect(service).toBeTruthy();
  }));
});
