<template>
  <router-view />
</template>

<style>
* {
  font-family: "Noto Sans Math", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  background-color: rgb(247, 248, 249);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

p {
  text-align: left;
}

.shadow {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-height: 4em;
  border-radius: 8px;
  margin-bottom: 2em;
  padding-bottom: 1em;
  background-color: #ffffff;
}

hr {
  opacity: 0.5;
}

.intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5em;
  background-color: #2c3e50;
  margin: 0 0 1em 0;
  padding: 0.5em 1em 0.5em 1em;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: solid 0.2em #e39e21;
}

.intro * {
  color: rgb(236, 237, 238);
}

.intro ~ * {
  padding: 0 1em;
}

button {
  margin: 0.3em;
  font-size: 0.8em;
  background-color: rgb(247, 248, 249);
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  height: 2em;
}

button:hover {
  transform: scale(1.05);
}

#nav {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 3em;
}

h3 {
  padding: 0 3em;
}

.yellow {
  background-color: #e39e21;
  color: rgb(247, 248, 249);
  padding: 0 1em;
}

.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(135, 135, 135, 0.5);
}

.foreground {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  height: 15em;
  width: 40%;
  margin-top: 10%;
  background-color: #ffffff;
  border-radius: 8px;
}

.confirm-btns {
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.error,
.faulty {
  color: rgb(252, 74, 74);
}
</style>
