
import tinycolor2 from "tinycolor2";

const rgb = (char) => char.charCodeAt(0) > 255 ? 255 : char.charCodeAt(0);
const correctNum = (num) => num < 0 ? 0 : num;

export default  ({avatar, firstName, _id}) => {
    if(avatar) return avatar;
    const [r, g, b] = _id.substr(8, 3).split('').map(rgb).filter(correctNum);
    const symbol = firstName.charAt(0).toUpperCase();
    const lighten = tinycolor2({r, g, b}).lighten(10).toHexString();
    const lighten2 = tinycolor2({r, g, b}).lighten(0).toHexString();
    return [{lighten, lighten2}, symbol];
};
