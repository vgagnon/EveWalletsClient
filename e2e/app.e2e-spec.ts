import { EveWalletsClientPage } from './app.po';

describe('eve-wallets-client App', () => {
  let page: EveWalletsClientPage;

  beforeEach(() => {
    page = new EveWalletsClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
