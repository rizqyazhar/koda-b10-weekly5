/**
 *
 * @typedef {Object} CustomButton
 *
 * @property {string} btnText
 * @property {string[]} btnImg
 * @property {string[]} btnAlt
 * @property {string} btnCustomStyles
 * @property {string} btnTextCustomStyles
 * @property {"button-one-icon" | "button-two-icon" | "button-basic"} [variant="button-basic"]
 *
 */

/**
 *
 * @typedef {React.ButtonHTMLAttributes<HTMLButtonElement> & CustomButton} Button
 *
 */

/**
 *
 * @param {Button} props
 * @returns {React.JSX.Element}
 */
export default function Button(props) {
  const {
    btnText,
    btnImg,
    btnAlt,
    variant,
    btnCustomStyles,
    btnTextCustomStyles,
    ...rest
  } = props;

  if (variant === "button-one-icon") {
    return (
      <button
        {...rest}
        className={`w-fit flex items-center gap-1.75 px-3.5 py-2 rounded-full hover:opacity-80 transition-colors cursor-pointer ${btnCustomStyles}`}>
        <img src={btnImg[0]} alt={btnAlt[0]} />
        <span
          className={`font-publicSans font-semibold text-xs ${btnTextCustomStyles}`}>
          {btnText}
        </span>
      </button>
    );
  } else if (variant === "button-two-icon") {
    return (
      <button
        {...rest}
        className={`w-fit flex items-center gap-1.75 px-3.5 py-2 rounded-full hover:opacity-80 transition-colors cursor-pointer ${btnCustomStyles}`}>
        <img src={btnImg[0]} alt={btnAlt[0]} />
        <span
          className={`font-publicSans font-semibold text-xs ${btnTextCustomStyles}`}>
          {btnText}
        </span>
        <img src={btnImg[1]} alt={btnAlt[1]} />
      </button>
    );
  } else {
    return (
      <button
        {...rest}
        className={`w-fit flex items-center gap-1.75 px-3.5 py-2 rounded-full hover:opacity-80 transition-colors cursor-pointer ${btnCustomStyles}`}>
        <span
          className={`font-publicSans font-semibold text-xs ${btnTextCustomStyles}`}>
          {btnText}
        </span>
      </button>
    );
  }
}
