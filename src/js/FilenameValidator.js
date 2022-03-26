// source for illegal characters: https://www.mtu.edu/umc/services/websites/writing/characters-avoid/
import illegalChars from "@/assets/illegalCharacters.json";

export default function isValidFilename(filename) {
  if (filename.length === 0) {
    return false;
  }
  const illegal = illegalChars.symbols.concat(illegalChars.ws);
  for (let ch of illegal) {
    if (filename.includes(ch)) {
      return false;
    }
  }
  return true;
}
