import 'src/App.css';
import { Scrollbar } from 'react-scrollbars-custom';
import styled from "styled-components";
import { Product } from 'src/model/product';

type Props = {
  products: Product[],
  onProductSelect: (fileName: string) => void
}

export const SideBar = ({ products, onProductSelect }: Props) => {
  return (
    <>
      <Aside>
        <Header>
          <h1>Product-Eye</h1>
        </Header>

        <h2>Products</h2>
        <CustomScrollbar>
          {renderProducts({products, onProductSelect})}
        </CustomScrollbar>
      </Aside>
    </>
  );
};

const renderProducts = ({ products, onProductSelect }: Props) => {
  return products.map((product) => {
    return (
      <Product key={product.fileName} onClick={() => onProductSelect(product.fileName)}>
        <ProductSpan>{product.productName}</ProductSpan>
      </Product>
    );
  });
}

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #131313;
    padding: 20px;
    text-align: center;
`;

const Header = styled.header`
    text-align: center;

    & h1 {
        margin: 0;
        padding: 0;
    }
`;

const ProductSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: background 0.5s ease;
`;

const Product = styled.div`
    width: 100%;
    height: 100px;
    margin: 10px auto;
    border-radius: 10px;
    cursor: pointer;
    background-image: linear-gradient(135deg, #008aff, #86d472);
    color: #ffffff;
    position: relative;
    z-index: 2;
    padding: 3px;
    justify-content: center;
    align-items: center;

    &:hover ${ProductSpan} {
        background: transparent;
    }
`;

const CustomScrollbar = styled(Scrollbar)`
    flex: 1;
    width: 100%;
    height: 100%;
`;
