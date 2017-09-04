import { SHOPPINGVIMCARPage } from './app.po';

describe('shopping-vimcar App', () => {
  let page: SHOPPINGVIMCARPage;

  beforeEach(() => {
    page = new SHOPPINGVIMCARPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
