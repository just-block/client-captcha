export const generateCaptchaCode = (alphabet: string, charsCount: number) => {
  const captcha: string[] = [];
  for (let i = 0; i < charsCount; i += 1) {
    const index = Math.ceil(Math.random() * alphabet.length);
    if (alphabet[index] && captcha.indexOf(alphabet[index]) === -1) {
      captcha.push(alphabet[index]);
    } else {
      i -= 1;
    }
  }
  return captcha.join("");
};
