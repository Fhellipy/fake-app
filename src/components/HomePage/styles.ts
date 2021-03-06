import styled from 'styled-components';
import { FiAnchor } from '../../styles/Icons';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;

  > a {
    text-decoration: none;
  }
`;

export const Banner = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  text-align: center;

  > img {
    background: var(--black);
    width: 100%;
    height: 194px;

    position: relative;
  }

  > span {
    z-index: 1;
    position: absolute;

    top: 150px;

    font-size: 20px;
    font-weight: bold;
    color: var(--white);
  }
`;

export const Tab = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  background: var(--on-primary);
  padding-left: 20px;

  > span {
    color: var(--primary);
    font-size: 20px;
    font-weight: 700;

    margin-left: 10px;

    text-transform: uppercase;
  }
`;

export const AnchorIcon = styled(FiAnchor)`
  width: 28px;
  height: 28px;

  stroke: var(--primary);
`;

export const PostList = styled.div`
  width: 100%;
  max-height: 100%;

  border-bottom: 20px solid var(--background);
`;
