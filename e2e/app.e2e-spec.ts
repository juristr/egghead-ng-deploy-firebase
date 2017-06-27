import { EggheadNgDeployFirebasePage } from './app.po';

describe('egghead-ng-deploy-firebase App', () => {
  let page: EggheadNgDeployFirebasePage;

  beforeEach(() => {
    page = new EggheadNgDeployFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
