import { fireEvent, render, screen } from "@testing-library/react";

import { BookingLink } from "./BookingLink";
import { BookingModule } from "./BookingModule";

beforeEach(() => {
  document.getElementById("vitaem-module-integration-script")?.remove();
  window.history.replaceState(null, "", "/");
});

test("keeps one integration script when a route replaces the booking container", () => {
  const { rerender } = render(<BookingModule key="home" onPhoto />);
  expect(document.querySelector("[data-vitaem-module-integration]")?.getAttribute("data-vitaem-module-integration"))
    .toBe("497af9e4-ce34-4c8a-b623-356ba113d7bc");
  rerender(<BookingModule key="rules" />);
  expect(document.querySelectorAll("#booking-module")).toHaveLength(1);
  expect(document.querySelectorAll('script[src="https://client.vitaem.app/assets/module-integration.js"]')).toHaveLength(1);
});

test.each([false, true])("scrolls repeatedly on the same page, reduced motion: %s", (reducedMotion) => {
  const scrollIntoView = jest.fn();
  Object.defineProperty(window, "matchMedia", { configurable: true, value: jest.fn(() => ({ matches: reducedMotion })) });
  render(<><BookingModule /><BookingLink /></>);
  document.getElementById("booking-module")!.scrollIntoView = scrollIntoView;
  const link = screen.getByRole("link", { name: "Забронировать" });
  expect(link.getAttribute("href")).toBe("#booking-module");
  expect(link.hasAttribute("target")).toBe(false);
  fireEvent.click(link);
  fireEvent.click(link);
  expect(scrollIntoView).toHaveBeenCalledTimes(2);
  expect(scrollIntoView).toHaveBeenLastCalledWith({ block: "start", behavior: reducedMotion ? "auto" : "smooth" });
  expect(window.location.pathname).toBe("/");
  expect(window.location.hash).toBe("#booking-module");
});
