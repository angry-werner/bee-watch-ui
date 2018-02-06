import { AppPage } from './app.po';

describe('bee-watch-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('The Bee keepers bee watch application');
  });
});
