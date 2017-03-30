import { BriansServiceTrackerPage } from './app.po';

describe('brians-service-tracker App', () => {
  let page: BriansServiceTrackerPage;

  beforeEach(() => {
    page = new BriansServiceTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aap works!');
  });
});
