import axios from "axios";
import userEvent from "@testing-library/user-event";
import { it, describe, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Products from "./Products";
vi.mock("axios");

describe("products component", () => {
  let products;
  let loadCart;

  beforeEach(() => {
    products = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };

    loadCart = vi.fn();
  });

  it("displays the products correctly", () => {
    render(<Products product={products} loadCart={loadCart} />);

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).toBeInTheDocument();
    expect(screen.getByText("$10.90")).toBeInTheDocument();
    expect(screen.getByText(87)).toBeInTheDocument();
    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg",
    );
    expect(screen.getByTestId("product-rating-stars-image")).toHaveAttribute(
      "src",
      `images/ratings/rating-45.png`,
    );
  });

  it("adds product to the cart", async () => {
    render(<Products product={products} loadCart={loadCart} />);
    const user = userEvent.setup();
    const addToCartButton = screen.getByTestId("addToCartButton");

    await user.click(addToCartButton);

    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    });

    expect(loadCart).toHaveBeenCalled();
  });

  it("selects the quantity", async () => {
    render(<Products product={products} loadCart={loadCart} />);
    const quantitySelector = screen.getByTestId("selected-quantity");
    expect(quantitySelector).toHaveValue("1");

    const user = userEvent.setup();
    await user.selectOptions(quantitySelector, "3");
    expect(quantitySelector).toHaveValue("3");
    const addToCartButton = screen.getByTestId("addToCartButton");
    await user.click(addToCartButton);

    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 3,
    });
     expect(loadCart).toHaveBeenCalled();
  });
});
