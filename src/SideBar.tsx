import './App.css';
import { Aside, Header, Product, ProductSpan } from './styles';


const renderProducts = (products: { productName: string; fileName: string }[], onProductSelect: (arg0: string) => void) => {
  return products.map((product) => {
    return (
      <Product key={product.fileName} onClick={() => onProductSelect(product.fileName)}>
        <ProductSpan>{product.productName}</ProductSpan>
      </Product>
    );
  });
}

const SideBar = ({ products, onProductSelect }: { products: { productName: string; fileName: string }[], onProductSelect: (arg0: string) => void }) => {
  return (
    <>
      <Aside>
        <Header>
          <h1>Product-Eye</h1>
        </Header>

        <section>
          <h2>Products</h2>
            {renderProducts(products, onProductSelect)}
        </section>
      </Aside>
    </>
  );
};


export default SideBar;