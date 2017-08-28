import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  // PRUEBA 1 buscar heroes
  it('buscar heroes', () => {
    page.navigateTo();
    expect(page.buscarPorNombre('Narco')).toContain('Narco details!');
  });

  // PRUEBA 2 eliminar heroe
  it('eliminar heroe', () => {
    page.navigateToHeroes();
    page.eliminarHeroe();
    expect(page.getAllHeroes().count()).toBe(10);
  });

  // PRUEBA 3 editar heroe
  it('editar heroe', () => {
    page.navigateTo();
    expect(page.editarHeroe('Juan')).toEqual([ 'Mr. NiceJuan', 'Narco', 'Bombasto', 'Celeritas' ]);
  });

  // PRUEBA 4 navegar heroe desde dashboard
  it('navegar heroe desde dashboard', () => {
    expect(page.navegarHeroeDashboard()).toEqual(true);
  });

  // PRUEBA 5 navegar heroe desde lista de heroes
  it('navegar heroe desde lista de heroes', () => {
    expect(page.navegarDesdeListaHeroes()).toEqual(true);
  });

  // PRUEBA 6 navegar heroe desde la busqueda
  it('navegar heroe desde la busqueda', () => {
    expect(page.navegarDesdeBusqueda()).toEqual(true);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});
