const timeout = 10000;

describe ('Registro', ()=>{
	//const browser;
	//const page;
	beforeAll(async ()=>{
		await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
		await page.waitForSelector('.form-control');
		await page.type('[ng-reflect-name="firstName"]', '1');
		await page.type('[ng-reflect-name="lastName"]', '1');
		await page.type('[ng-reflect-name="username"]', '1');
		await page.type('[ng-reflect-name="password"]', 'password');
		await page.screenshot({path: '7-usuarioExiste.png'});
		await page.click('.btn-primary');
	},timeout);
	it('Usuario ya existe', async () => {
		await expect(page).toMatch('is already taken',{ timeout: timeout });
	},timeout);
});