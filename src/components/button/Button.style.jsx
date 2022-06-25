import styled from "styled-components";
import { Link } from "react-router-dom";
export const CategoriesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;
export const BtnCategories = styled(Link)`
  background: var(--gray-background);
  color: var(--gray-text);
  font-size: 1.2rem;
  border-radius: calc(var(--border-radius) * 2);
  padding: 0.2rem 1.2rem;
`;
