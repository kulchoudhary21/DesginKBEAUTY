import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import Pract from "./Pract"; // Adjust the import path as needed

describe("Pract Component", () => {
  test("renders without crashing", () => {
    render(<Pract />);
  });

  test("renders three boxes", () => {
    render(<Pract />);
    const boxes = screen.getAllByTestId(/box/);
    expect(boxes).toHaveLength(3);
  });

  test("renders boxes with correct class names", () => {
    render(<Pract />);
    expect(screen.getByTestId("box1"));
    expect(screen.getByTestId("box2"));
    expect(screen.getByTestId("box3"));
  });
});
