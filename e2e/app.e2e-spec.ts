import { LoadingDockPage } from './app.po';

describe('loading-dock App', () => {
  let page: LoadingDockPage;

  beforeEach(() => {
    page = new LoadingDockPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
