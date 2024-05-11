import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/common/components/layout/Footer/Footer";

describe("HomePage Testing", () => {
  it("Footer rendered", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
