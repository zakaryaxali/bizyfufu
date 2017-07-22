import { BizyfufuPage } from './app.po';

describe('bizyfufu App', () => {
  let page: BizyfufuPage;

  beforeEach(() => {
    page = new BizyfufuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
