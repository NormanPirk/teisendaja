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

html {
  height: 100%;
}

body {
  background-color: rgb(247, 248, 249);
  font-size: 20px;
  width: auto;
  min-width: 1100px;
  padding: 0 2em;
  margin: 0;
  height: 100%;
}

a {
  cursor: default;
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
  border-radius: 8px;
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
  transition-duration: 0.2s;
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
  margin-top: 15%;
  background-color: #ffffff;
  border-radius: 8px;
}

.confirm-btns {
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.error-message-div {
  min-height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error,
.faulty,
.error::selection,
.error span::selection {
  color: rgb(252, 74, 74);
}

@media screen and (max-width: 2880px) {
  body {
    font-size: 18px;
  }
}

@media screen and (max-width: 2400px) {
  body {
    font-size: 17px;
  }
}

@media screen and (max-width: 1920px) {
  body {
    font-size: 16px;
  }
}

@media screen and (max-width: 1600px) {
  body {
    font-size: 15px;
  }
}

@media screen and (max-width: 1540px) {
  body {
    font-size: 14px;
  }
}

@media screen and (max-width: 1368px) {
  body {
    font-size: 13px;
  }
}

@font-face {
  font-family: "Noto Sans Math";
  font-style: normal;
  font-weight: 400;
  src: url(../src/assets/fonts/noto-sans-math-v13-math-regular.woff2) format("woff2");
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0330, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2034-2037, U+2057, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2102, U+210A-210E, U+2110-2112, U+2115,
    U+2119-211D, U+2124, U+2128, U+212C-212D, U+212F-2131, U+2133-2138, U+213C-2140, U+2145-2149, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A,
    U+237C, U+2395, U+239B-23B6, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF,
    U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
