// for variables you can go to styles/_variables.scss and change them

export const css_upwardAnimation =
  `upwardAnimation 0.8s ease 0.3s 1 normal forwards`.trim(); // .trim() is for safety coz lets say you add spaces in starting or end

// the order MUST be -> animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode animation-play-state
export const css_upwardAnimation_prop = `
  @keyframes upwardAnimation{
    0%{
      opacity: 0;
      transform: translateY(50px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
  `;

export const allCssProps = [css_upwardAnimation_prop];
