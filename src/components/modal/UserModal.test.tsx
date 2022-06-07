import React from "react";
import { render, screen } from "@testing-library/react";
import UserModal from "./UserModal";

describe("Modal Component", () => {
  it("should render specific values", () => {
    render(<UserModal show={true} albumId={1} />);
    expect(
      screen.getByText("accusamus beatae ad facilis cum similique qui sunt")
    ).toBeInTheDocument();
    const albumImage = screen.getByRole("img");
    expect(albumImage).toHaveAttribute(
      "src",
      "https://via.placeholder.com/600/92c952"
    );
  });
});
