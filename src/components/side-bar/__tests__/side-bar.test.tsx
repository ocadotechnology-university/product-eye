import { fireEvent, render, screen } from "@testing-library/react";
import { SideBar } from "src/components/side-bar/side-bar";
import { Product } from "src/model/product.ts";

const product: Product = { productName: 'Product 1', fileName: 'product1' };

it('should render proper product name', () => {
  render(<SideBar products={[product]} onProductSelect={() => { }} />);

  expect(screen.getByText(product.productName)).toBeInTheDocument();
});

it('should handle product selection', () => {
  const onProductSelect = vi.fn();

  render(<SideBar products={[product]} onProductSelect={onProductSelect} />);
  fireEvent.click(screen.getByText(product.productName));

  expect(onProductSelect).toHaveBeenCalledWith(product.fileName);
});
