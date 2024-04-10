class UserAuth {
  constructor({ user }) {
    this.user = user;
  }
  verifyCredentials() {
    return true;
  }
}

class UserSettings extends UserAuth {
  constructor({ user, settings }) {
    super({ user }); // Pasa el usuario al constructor de la clase padre
    this.settings = settings;
  }

  changeSettings() {
    if (this.verifyCredentials()) {
      console.log(`Success ${this.settings} ready`);
    } else {
      console.log(`Failed procees credential error settings ${this.settings}`)
    }
  }
}

// Creación de una nueva instancia de UserSettings
const newAccess = new UserSettings({
  user: 'Ana',
  settings: 'Light Mode'
});

newAccess.changeSettings()