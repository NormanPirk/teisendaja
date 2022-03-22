<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link>
  </div> -->
  <h3>{{ $t("title") }}</h3>
  <router-view />
</template>

<style>
* {
  font-family: "Noto Sans Math", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p {
  text-align: left;
}

.shadow {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-height: 4em;
  border-radius: 8px;
  padding: 0.5em;
  margin-bottom: 2em;
}

hr {
  opacity: 0.5;
}

.intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 1em;
}

button {
  margin: 0.2em;
  font-size: 0.8em;
}
</style>
