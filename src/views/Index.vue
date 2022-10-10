<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html {
  font-size: 10px;
}
body {
  font-size: 16px;
  background-color: #f4f4f4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  & > div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    & > div {
      flex: 1;
    }
  }
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
header,
main,
footer,
section {
  box-sizing: border-box;
  display: block;
  width: 100%;
}
</style>
