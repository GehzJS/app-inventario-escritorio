const { app, BrowserWindow, Menu } = require('electron');

let win;

Menu.setApplicationMenu(null);

function createWindow() {
	win = new BrowserWindow({
		minWidth: 1280,
		minHeight: 720,
		devTools: false,
		center: true,
		icon: `file://${__dirname}/dist/favicon.ico`
	});

	win.maximize();

	win.loadURL(`file://${__dirname}/dist/index.html`);

	win.on('closed', function() {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	if (win === null) {
		createWindow();
	}
});
