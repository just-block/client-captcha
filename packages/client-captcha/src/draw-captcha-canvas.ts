export type DrawCaptchaOptions = {
  backgroundColor?: string;
  fontColor?: string;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: string;
  height?: number;
  width?: number;
};

export const defaultOptions: Required<DrawCaptchaOptions> = {
  backgroundColor: "#F2F2F2",
  fontColor: "#222",
  fontFamily: "Arial, Tahoma",
  fontSize: 20,
  fontStyle: "normal",
  height: 40,
  width: 230,
};

export const drawCaptchaCanvas = (
  ctx: CanvasRenderingContext2D,
  code: string,
  options?: DrawCaptchaOptions,
) => {
  const {
    backgroundColor = defaultOptions.backgroundColor,
    fontColor = defaultOptions.fontColor,
    fontFamily = defaultOptions.fontFamily,
    fontSize = defaultOptions.fontSize,
    fontStyle = defaultOptions.fontStyle,
    height = defaultOptions.height,
    width = defaultOptions.width,
  } = options || {};

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);

  // Set up the font properties
  ctx.font = `${fontStyle} ${fontSize}px ${fontFamily}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = fontColor;

  const characters = code.split("");
  const centerX = width / 2;
  const startY = height / 2;
  // Calculate the starting position on the x-axis so that the text is centered
  let startX = centerX - (characters.length * fontSize) / 2;

  characters.forEach((char: any) => {
    // Move the context to where we want to draw the character
    ctx.save();
    ctx.translate(startX + fontSize / 2, startY);
    // Rotate the context by a random amount
    const rotation = (Math.random() - 0.5) * (Math.PI / 180) * 50; // degrees variation
    ctx.rotate(rotation);
    // Draw the character
    ctx.fillText(char, 0, 0);
    // Restore the context for the next character
    ctx.restore();
    // Move startX for the next character
    startX += fontSize;
  });
};
