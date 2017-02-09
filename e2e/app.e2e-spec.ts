import { VehicleListPage } from './app.po';

describe('vehicle-list App', function() {
  let page: VehicleListPage;

  beforeEach(() => {
    page = new VehicleListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
