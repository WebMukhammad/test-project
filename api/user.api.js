export default {
  getIP() {
    return this.$axios.$get('https://ipgeolocation.abstractapi.com/v1/?api_key=696c3ec62b6b418cb75fd5505c83a893')
  }
}
