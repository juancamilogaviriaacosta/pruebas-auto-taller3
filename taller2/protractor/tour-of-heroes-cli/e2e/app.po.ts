import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  buscarPorNombre(nombre: string) {
    element(by.id('search-box')).sendKeys(nombre);
    element(by.css('.search-result')).click();
    return element.all(by.tagName('h2')).getText();
  }

  eliminarHeroe() {
    element.all(by.css('.delete')).first().click();
  }

  editarHeroe(nombre: string) {
    element.all(by.css('.col-1-4')).first().click();
    element.all(by.css('.ng-pristine')).first().sendKeys(nombre);
    element(by.buttonText('Save')).click();
    browser.waitForAngular();
    return this.getTop4Heroes();
  }

  navegarHeroeDashboard() {
    this.navigateTo();
    element.all(by.css('.col-1-4')).first().click();
    browser.waitForAngular();
    return element(by.buttonText('Save')).isPresent();
  }

  navegarDesdeListaHeroes() {
    this.navigateToHeroes();
    element.all(by.css('.heroes')).first().click();
    element(by.buttonText('View Details')).click();
    return element(by.buttonText('Save')).isPresent();
  }

  navegarDesdeBusqueda() {
    this.navigateTo();
    element(by.id('search-box')).sendKeys('Narco');
    element(by.css('.search-result')).click();
    return element(by.buttonText('Save')).isPresent();
  }
}
