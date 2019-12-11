export class Place {
  static isValid(value) {
    let isValid = true;
    if (this.hasChildren(value)) {
      isValid = this.isChildrenValid(value.children);
    }
    return value.hasOwnProperty("title") && isValid;
  }
  static hasChildren(place) {
    return place.hasOwnProperty("children");
  }
  static isChildrenValid(children) {
    return typeof children === "object";
  }
}
