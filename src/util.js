export const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);    
}

export const isInOrPassedViewport = (el) => {
    return isInViewport(el) || el.getBoundingClientRect().y < 0;
}

window.lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
export const detectScrollDirection = (callback) => {
    document.addEventListener("scroll", function(){
        let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        let dir = "";
        if (st > window.lastScrollTop){
            dir = "down";
        } else {
            dir = "up";
        }
        window.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        return callback(dir);
    }, false);
}