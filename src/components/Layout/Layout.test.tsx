import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

jest.mock("../Header", () => {
  const { Link } = jest.requireActual("react-router-dom");
  return {
    Header: () => <nav><Link to="/info">Контакты</Link><Link to="/rule">Правила</Link></nav>,
  };
});
jest.mock("../Footer", () => ({ Footer: () => <footer>Подвал</footer> }));
jest.mock("../form/FormContainer", () => ({ FormContainer: () => null }));

test.each(["pending", "fulfilled"])(
  "keeps pages accessible with %s queries and unfinished external resources",
  (status) => {
    const fontsDescriptor = Object.getOwnPropertyDescriptor(document, "fonts");
    Object.defineProperty(document, "fonts", {
      configurable: true,
      value: { ready: new Promise(() => {}) },
    });
    const store = configureStore({
      reducer: () => ({
        form: { isFormOpen: false },
        api: { queries: { content: { status } } },
        apiRate: { queries: { currency: { status } } },
      }),
    });

    try {
      const { container, unmount } = render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/info"]}>
            <Routes>
              <Route element={<Layout backendError={false} />}>
                <Route path="info" element={
                  <main><h1>Контакты усадьбы</h1><img src="/unfinished.jpg" alt="Усадьба" /><span role="status">Загрузка блока</span></main>
                } />
                <Route path="rule" element={<main><h1>Правила проживания</h1></main>} />
              </Route>
            </Routes>
          </MemoryRouter>
        </Provider>,
      );

      expect((screen.getByRole("img") as HTMLImageElement).complete).toBe(false);
      expect(container.querySelector("[data-vitaem-module-integration]")?.childNodes.length).toBe(0);
      expect(screen.getByRole("heading").textContent).toBe("Контакты усадьбы");
      expect(screen.queryByText("Загружаем страницу...")).toBeNull();
      expect(container.querySelector('[aria-busy="true"]')).toBeNull();
      expect(screen.getByRole("status").textContent).toBe("Загрузка блока");

      fireEvent.click(screen.getByRole("link", { name: "Правила" }));
      expect(screen.getByRole("heading").textContent).toBe("Правила проживания");
      expect(screen.queryByText("Загружаем страницу...")).toBeNull();

      fireEvent.click(screen.getByRole("link", { name: "Контакты" }));
      expect(screen.getByRole("heading").textContent).toBe("Контакты усадьбы");
      expect(screen.queryByText("Загружаем страницу...")).toBeNull();
      unmount();
    } finally {
      document.getElementById("vitaem-module-integration-script")?.remove();
      if (fontsDescriptor) {
        Object.defineProperty(document, "fonts", fontsDescriptor);
      } else {
        Reflect.deleteProperty(document, "fonts");
      }
    }
  },
);
