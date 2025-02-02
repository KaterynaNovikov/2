export const campaigns = {
  data() {
    return {
      parent: null,
    };
  },

  mounted() {
    this.parent = this.$root; 

    if (!this.parent.user || !this.parent.user.auth) {
      this.parent.logout();
    }
  },

  template: `<div>Campaigns</div>`,
};
