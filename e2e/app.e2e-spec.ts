import { ImusifyPage } from './app.po';

describe('imusify App', () => {
  let page: ImusifyPage;

  beforeEach(() => {
    page = new ImusifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
