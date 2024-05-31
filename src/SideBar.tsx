import './App.css';
import { Aside, Header, Product, ProductSpan } from './styles';
import { Scrollbar } from 'react-scrollbars-custom';


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

        <h2>Products</h2>
        <Scrollbar style={{ flex: 1, width: "100%", height: "100%" }}>
          {renderProducts(products, onProductSelect)}
        </Scrollbar>
      </Aside>
    </>
  );
};


export default SideBar;