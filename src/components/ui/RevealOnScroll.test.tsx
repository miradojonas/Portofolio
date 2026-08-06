import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import RevealOnScroll from "./RevealOnScroll";

let intersectCallback: IntersectionObserverCallback | undefined;

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: IntersectionObserverCallback) {
    intersectCallback = callback;
    MockIntersectionObserver.instances.push(this);
  }
}

beforeEach(() => {
  intersectCallback = undefined;
  MockIntersectionObserver.instances = [];
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

describe("RevealOnScroll", () => {
  it("rend ses enfants", () => {
    render(
      <RevealOnScroll>
        <p>Contenu</p>
      </RevealOnScroll>,
    );
    expect(screen.getByText("Contenu")).toBeInTheDocument();
  });

  it("est masqué au départ", () => {
    const { container } = render(
      <RevealOnScroll>
        <p>Contenu</p>
      </RevealOnScroll>,
    );

    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain("scrollReveal");
    expect(element.className).not.toContain("scrollRevealVisible");
  });

  it("révèle le contenu quand l'élément entre dans le viewport", () => {
    const { container } = render(
      <RevealOnScroll>
        <p>Contenu</p>
      </RevealOnScroll>,
    );

    expect(intersectCallback).toBeDefined();

    act(() => {
      intersectCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      );
    });

    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain("scrollRevealVisible");
  });

  it("déconnecte l'observer au démontage", () => {
    const { unmount } = render(
      <RevealOnScroll>
        <p>Contenu</p>
      </RevealOnScroll>,
    );

    unmount();

    const instance = MockIntersectionObserver.instances[0];
    expect(instance.disconnect).toHaveBeenCalled();
  });
});
