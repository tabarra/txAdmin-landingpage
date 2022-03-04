import { keyframes } from '@emotion/react';

export const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2px, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
