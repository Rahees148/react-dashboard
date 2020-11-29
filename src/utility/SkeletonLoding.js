import React from "react";
import styled from "styled-components";
import { usePromiseTracker } from "react-promise-tracker";
import Skeleton from "react-loading-skeleton";

const SkeletonWrapper = styled.div`
  width: 90vw;
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 80vw;
  }
`;

const Grid = styled.div`
  width: 100%;
  padding: 22px 0;
  margin-bottom: 12px;
  display: grid;
  grid-gap: 8px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 2%;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #0000000a;
  border-radius: 12px;
`;
const Ul = styled.ul`
  list-style: none;
  width: 100%;
`;

function SkeletonLoding() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <SkeletonWrapper>
        <Grid>
          <Card>
            <div style={{ width: "100%" }}>
              <Skeleton height={150} />
            </div>
          </Card>
          <Card>
            <Ul>
              {Array(3)
                .fill()
                .map((item, index) => (
                  <li key={index}>
                    <Skeleton height={30} />
                  </li>
                ))}
            </Ul>
          </Card>
          <Card>
            <Skeleton circle={true} height={103} width={103} />
          </Card>
        </Grid>
        <Card>
          <Ul>
            {Array(3)
              .fill()
              .map((item, index) => (
                <li key={index}>
                  <Skeleton height={30} />
                </li>
              ))}
          </Ul>
        </Card>
      </SkeletonWrapper>
    )
  );
}

export default SkeletonLoding;
