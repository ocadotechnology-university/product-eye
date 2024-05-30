import './App.css';
import { Aside, Header, Product, ProductSpan, ScrollableContainer } from './styles';


const renderProducts = (products: string[]) => {
  return products.map((product) => {
    return (
      <Product>
        <ProductSpan>{product}</ProductSpan>
      </Product>
    );
  });
}


const SideBar = ({ products }: { products: string[] }) => {
  return (
    <>
      <Aside>
        <Header>
          <h1>Product-Eye</h1>
        </Header>

        <section>
          <h2>Products</h2>
          <ScrollableContainer>
            {renderProducts(products)}
          </ScrollableContainer>
        </section>
      </Aside>
    </>
  );
};

export default SideBar;