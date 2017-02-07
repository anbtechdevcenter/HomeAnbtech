import { HomeAnbtechPage } from './app.po';

describe('home-anbtech App', function() {
  let page: HomeAnbtechPage;

  beforeEach(() => {
    page = new HomeAnbtechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
