import { NgzodPage } from './app.po';

describe('ngzod App', function() {
  let page: NgzodPage;

  beforeEach(() => {
    page = new NgzodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
