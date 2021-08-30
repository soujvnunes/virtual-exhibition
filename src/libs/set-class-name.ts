export default (...add: any) =>
  (...remove: any) =>
  (el: any) => {
    el.classList.add(...add);
    el.classList.remove(...remove);
  };
