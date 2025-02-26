export default class StringUtil {
  static withComma(number: number) {
    return number.toLocaleString("en-US", { maximumFractionDigits: 3 });
  }
}
