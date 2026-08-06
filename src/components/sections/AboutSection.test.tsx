import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutSection from "./AboutSection";
import { content } from "@/data/content";

describe("AboutSection", () => {
  it("affiche le titre et les paragraphes", () => {
    render(<AboutSection />);

    expect(
      screen.getByRole("heading", { name: content.about.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(content.about.paragraphs[0])).toBeInTheDocument();
  });

  it("affiche les points forts", () => {
    render(<AboutSection />);

    expect(
      screen.getByText(content.about.highlights[0].value),
    ).toBeInTheDocument();
  });
});
