function handleRouter() {
  const pathName = window.location.pathname;

  switch (pathName) {
    case '/':
      console.log('Home');
      break;
    case '/home':
      console.log('Home');
      break;
  }
}

export function initRouter() {
  window.addEventListener('popstate', handleRouter);

  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');

      if (href) {
        history.pushState({}, '', href);
        handleRouter();
      }
    });
  });

  handleRouter();
}
