import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitSeulComponent } from './produit-seul.component';

describe('ProduitSeulComponent', () => {
  let component: ProduitSeulComponent;
  let fixture: ComponentFixture<ProduitSeulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitSeulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitSeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
