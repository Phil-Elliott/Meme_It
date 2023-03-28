import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Header from "./Header";

describe("Header", () => {
  test("should toggle dark mode when dark mode button is clicked", () => {
    render(<Header />);
    const darkModeButton = screen.getByLabelText("toggle dark mode");
    const rootElement = window.document.documentElement;

    // Assert initial state
    expect(rootElement.classList.contains("light")).toBe(true);
    expect(rootElement.classList.contains("dark")).toBe(false);

    // Toggle dark mode
    fireEvent.click(darkModeButton);

    // Assert dark mode is enabled
    expect(rootElement.classList.contains("light")).toBe(false);
    expect(rootElement.classList.contains("dark")).toBe(true);

    // Toggle dark mode again
    fireEvent.click(darkModeButton);

    // Assert dark mode is disabled
    expect(rootElement.classList.contains("light")).toBe(true);
    expect(rootElement.classList.contains("dark")).toBe(false);
  });
});
