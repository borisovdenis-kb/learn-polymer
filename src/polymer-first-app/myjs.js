class PolymerFirstApp extends Polymer.Element {
  static get is() { return 'polymer-first-app'; }
  static get properties() {
    return {
      user: {
        type: Object,
        value: f => {
          return {
            firstName: "",
            lastName: "",
            middleName: "",
            gender: undefined,
            age: 0
          }
        }
      },
      fullName: {
        type: String,
        computed: 'computeFullName(user.lastName, user.firstName, user.middleName)'
      }
    };
  }

  computeFullName(lastName, firstName, middleName) {
    return `${lastName} ${firstName} ${middleName}`
  }

  open() {
    this.$.modal.open()
  }
}

window.customElements.define(PolymerFirstApp.is, PolymerFirstApp);