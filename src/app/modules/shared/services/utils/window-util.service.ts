export class WindowUtilService {
  public static focusById(elementId: string, delayMs: number = 0) {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.focus();
      }
    }, delayMs);
  }

  public static scrollToTheTop() {
    console.log('Jade do gury');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public static scrollToElementOfId(elementId: string, position: ScrollLogicalPosition = "center") {
    const foundElement = document.getElementById(elementId);
    if (foundElement) {
      foundElement.scrollIntoView({behavior: "smooth", block: position});
    }
  }
}
