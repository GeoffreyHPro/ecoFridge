import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports : [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('is there right number of refs', () => {
    expect(component).toBeTruthy();
    const navElement: HTMLElement = fixture.nativeElement.querySelector('nav');
    expect(navElement).toBeTruthy();

    const links = navElement.querySelectorAll('a');
    expect(links.length).toBe(4);
  });

  it('is there right name of balises', () => {
    const navElement: HTMLElement = fixture.nativeElement.querySelector('nav');
    expect(navElement).toBeTruthy();

    const links = navElement.querySelectorAll('a');
    expect(links[0].textContent).toContain('Home');
    expect(links[1].textContent).toContain('New purchase');
    expect(links[2].textContent).toContain('MyFridge');
    expect(links[3].textContent).toContain('Modify');
  });
});
