import { Sumitridhal.IoPage } from './app.po';

describe('sumitridhal.io App', () => {
  let page: Sumitridhal.IoPage;

  beforeEach(() => {
    page = new Sumitridhal.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
