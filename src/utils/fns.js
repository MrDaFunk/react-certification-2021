const safeHTML = (html) => ({ __html: html });

const stopPropagation = (event) => event.stopPropagation();

export { safeHTML, stopPropagation };
