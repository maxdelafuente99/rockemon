import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCharacterDetailComponent } from './poke-character-detail.component';

describe('PokeCharacterDetailComponent', () => {
  let component: PokeCharacterDetailComponent;
  let fixture: ComponentFixture<PokeCharacterDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeCharacterDetailComponent]
    });
    fixture = TestBed.createComponent(PokeCharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
