import RootLayout from '../layouts/Root';
import HomePage from '../pages/Home';

function appendBody(elements: HTMLElement | HTMLElement[]) {
  if (Array.isArray(elements)) {
    for (const element of elements) {
      document.body.appendChild(element);
    }
    return;
  }

  document.body.appendChild(elements);
  return;
}
function handleRouter() {
  const pathName = window.location.pathname;

  switch (pathName) {
    case '/':
      const homeElement = HomePage();
      const rootLayout = RootLayout({
        children: homeElement,
      });

      appendBody(rootLayout);
      break;
    case '/home':
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
