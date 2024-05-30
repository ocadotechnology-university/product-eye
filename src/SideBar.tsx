import './App.css';
import { Aside, Button, Header, Product, ProductSpan} from './styles';

const SideBar = () => {
  return (
    <>
      <Aside>
        <Header>
          <h1>Product-Eye</h1>
        </Header>

        <section>
          <h2>Products</h2>
          <Product>
            <ProductSpan></ProductSpan>
          </Product>
          <Product>
            <ProductSpan></ProductSpan>
          </Product>
          <Product>
            <ProductSpan></ProductSpan>
          </Product>
        </section>
      </Aside>
    </>
  );
};

export default SideBar;

/* 
        <footer style={{marginTop: "auto"}}>
          <Button>About us</Button>
        </footer>
*/