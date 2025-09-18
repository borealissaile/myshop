import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "../Header/styles";

export const Header: React.FC = () => {
  const isLogged = true;

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>Myshop.</S.HeaderTitle>

        <S.ButtonWrapper>
          <S.AuthButton isLogged={isLogged}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
