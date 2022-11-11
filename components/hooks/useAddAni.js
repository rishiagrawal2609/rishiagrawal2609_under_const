// import { useEffect } from "react";
// import { useRouter } from "next/router";
// /**
//  * @param {string} id
//  */
// export default function useAddAni(id) {
//   const router = useRouter();
//   const css_upwardAnimation = `upwardAnimation 0.8s ease 0.3s 1 normal forwards`;
//   useEffect(() => {
//     var elem = document.querySelector(`#${id} .contentful`);
//     if (elem) {
//       if (router.asPath == `/#${id}`) {
//         elem.style.animation = css_upwardAnimation;
//         elem.style["animation-delay"] = `1s`;
//       } else {
//         document.addEventListener("scroll", function tempScroll() {
//           if (window.innerHeight - elem.getBoundingClientRect().top >= 200) {
//             // elem.style["animation-play-state"] = "running";
//             elem.style.animation = css_upwardAnimation;
//             document.removeEventListener("scroll", tempScroll);
//           }
//         });
//       }
//     }
//   }, [router]);
// }

import { useEffect } from "react";
/**
 * @param {string} id
 */
export default function useAddAni(id) {
  const css_upwardAnimation = `upwardAnimation 0.8s ease 0.3s 1 normal forwards`;
  useEffect(() => {
    var elem = document.querySelector(`#${id} .contentful`);
    if (elem) {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(id);
            elem.style["animation-play-state"] = "running";
            elem.style.animation = css_upwardAnimation;
            elem.style["animation-delay"] = `0.75s`;
            observer.unobserve(elem);
          }
        });
      }, {});
      observer.observe(elem);
    }
  }, []);
}
