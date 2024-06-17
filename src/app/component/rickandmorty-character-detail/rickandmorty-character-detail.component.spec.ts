import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandmortyCharacterDetailComponent } from './rickandmorty-character-detail.component';

describe('RickandmortyCharacterDetailComponent', () => {
  let component: RickandmortyCharacterDetailComponent;
  let fixture: ComponentFixture<RickandmortyCharacterDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickandmortyCharacterDetailComponent]
    });
    fixture = TestBed.createComponent(RickandmortyCharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
