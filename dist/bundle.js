var app = (() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    observe: () => observe,
    storage: () => storage_exports,
    theme: () => theme_exports
  });

  // src/app/storage.ts
  var storage_exports = {};
  __export(storage_exports, {
    ensure: () => ensure,
    get: () => get,
    getStore: () => getStore,
    set: () => set,
    setStore: () => setStore
  });
  function getStore() {
    const raw = localStorage.getItem("storage");
    return JSON.parse(raw != null ? raw : "{}");
  }
  function setStore(store) {
    const raw = JSON.stringify(store);
    localStorage.setItem("storage", raw);
  }
  function set(name, value) {
    const store = getStore();
    store[name] = value;
    setStore(store);
  }
  function get(name) {
    const store = getStore();
    return store[name];
  }
  function ensure(name, defaultValue) {
    let value = get(name);
    if (value)
      return value;
    set(name, defaultValue);
    return defaultValue;
  }

  // src/app/theme.ts
  var theme_exports = {};
  __export(theme_exports, {
    switchIt: () => switchIt
  });
  if (get("dark"))
    switchIt();
  function switchIt() {
    const activated = document.body.classList.toggle("dark");
    set("dark", activated);
    console.log(activated);
  }

  // src/index.ts
  function observe(element, callback) {
    const observer = new IntersectionObserver(callback);
    observer.observe(element);
    return observer;
  }
  return src_exports;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2luZGV4LnRzIiwgInNyYy9hcHAvc3RvcmFnZS50cyIsICJzcmMvYXBwL3RoZW1lLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBhcyBzdG9yYWdlIGZyb20gXCIuL2FwcC9zdG9yYWdlXCJcbmV4cG9ydCAqIGFzIHRoZW1lIGZyb20gXCIuL2FwcC90aGVtZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgY2FsbGJhY2s6IEludGVyc2VjdGlvbk9ic2VydmVyQ2FsbGJhY2tcbik6IEludGVyc2VjdGlvbk9ic2VydmVyIHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIG9ic2VydmVyXG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlIHtcbiAgZGFyazogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmUoKTogUGFydGlhbDxTdG9yYWdlPiB7XG4gIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZVwiKVxuICByZXR1cm4gSlNPTi5wYXJzZShyYXcgPz8gXCJ7fVwiKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RvcmUoc3RvcmU6IFBhcnRpYWw8U3RvcmFnZT4pIHtcbiAgY29uc3QgcmF3ID0gSlNPTi5zdHJpbmdpZnkoc3RvcmUpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmFnZVwiLCByYXcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8U3RvcmFnZUtleSBleHRlbmRzIGtleW9mIFN0b3JhZ2U+KFxuICBuYW1lOiBTdG9yYWdlS2V5LFxuICB2YWx1ZTogU3RvcmFnZVtTdG9yYWdlS2V5XVxuKSB7XG4gIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKVxuICBzdG9yZVtuYW1lXSA9IHZhbHVlXG4gIHNldFN0b3JlKHN0b3JlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFN0b3JhZ2VLZXkgZXh0ZW5kcyBrZXlvZiBTdG9yYWdlPihcbiAgbmFtZTogU3RvcmFnZUtleVxuKTogU3RvcmFnZVtTdG9yYWdlS2V5XSB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKVxuICByZXR1cm4gc3RvcmVbbmFtZV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZTxTdG9yYWdlS2V5IGV4dGVuZHMga2V5b2YgU3RvcmFnZT4oXG4gIG5hbWU6IFN0b3JhZ2VLZXksXG4gIGRlZmF1bHRWYWx1ZTogU3RvcmFnZVtTdG9yYWdlS2V5XVxuKTogU3RvcmFnZVtTdG9yYWdlS2V5XSB7XG4gIGxldCB2YWx1ZSA9IGdldChuYW1lKVxuICBpZiAodmFsdWUpIHJldHVybiB2YWx1ZVxuICBzZXQobmFtZSwgZGVmYXVsdFZhbHVlKVxuICByZXR1cm4gZGVmYXVsdFZhbHVlXG59XG4iLCAiaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCJcblxuaWYgKHN0b3JhZ2UuZ2V0KFwiZGFya1wiKSkgc3dpdGNoSXQoKVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoSXQoKSB7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgc3RvcmFnZS5zZXQoXCJkYXJrXCIsIGFjdGl2YXRlZClcbiAgY29uc29sZS5sb2coYWN0aXZhdGVkKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJTyxzQkFBc0M7QUFDM0MsVUFBTSxNQUFNLGFBQWEsUUFBUTtBQUNqQyxXQUFPLEtBQUssTUFBTSxvQkFBTztBQUFBO0FBR3BCLG9CQUFrQixPQUF5QjtBQUNoRCxVQUFNLE1BQU0sS0FBSyxVQUFVO0FBQzNCLGlCQUFhLFFBQVEsV0FBVztBQUFBO0FBRzNCLGVBQ0wsTUFDQSxPQUNBO0FBQ0EsVUFBTSxRQUFRO0FBQ2QsVUFBTSxRQUFRO0FBQ2QsYUFBUztBQUFBO0FBR0osZUFDTCxNQUNpQztBQUNqQyxVQUFNLFFBQVE7QUFDZCxXQUFPLE1BQU07QUFBQTtBQUdSLGtCQUNMLE1BQ0EsY0FDcUI7QUFDckIsUUFBSSxRQUFRLElBQUk7QUFDaEIsUUFBSTtBQUFPLGFBQU87QUFDbEIsUUFBSSxNQUFNO0FBQ1YsV0FBTztBQUFBOzs7QUNyQ1Q7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFJLEFBQVEsSUFBSTtBQUFTO0FBRWxCLHNCQUFvQjtBQUN6QixVQUFNLFlBQVksU0FBUyxLQUFLLFVBQVUsT0FBTztBQUNqRCxJQUFRLElBQUksUUFBUTtBQUNwQixZQUFRLElBQUk7QUFBQTs7O0FGSlAsbUJBQ0wsU0FDQSxVQUNzQjtBQUN0QixVQUFNLFdBQVcsSUFBSSxxQkFBcUI7QUFDMUMsYUFBUyxRQUFRO0FBQ2pCLFdBQU87QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
