// Site-wide motion: smooth scroll, headline scramble, scroll reveals.
// Everything is skipped when the visitor prefers reduced motion.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01ABCDEFabcdef';

/**
 * Scramble an element's text from random characters into its final text.
 * The element's real text stays available to screen readers through
 * a visually hidden copy in the markup (see index.astro).
 */
function scramble(el, { duration = 1100, delay = 0 } = {}) {
  const final = el.dataset.text || el.textContent || '';
  el.dataset.text = final;
  const start = performance.now() + delay;

  function frame(now) {
    const progress = Math.min(Math.max((now - start) / duration, 0), 1);
    const revealed = Math.floor(progress * final.length);
    let out = '';
    for (let i = 0; i < final.length; i++) {
      const ch = final[i];
      if (i < revealed || ch === ' ') out += ch;
      else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    el.textContent = out;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

if (!reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scroll, kept in sync with ScrollTrigger
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Headline scramble (lighter on small screens)
  const small = window.matchMedia('(max-width: 600px)').matches;
  document.querySelectorAll('[data-scramble]').forEach((el, i) => {
    scramble(el, { duration: small ? 700 : 1100, delay: i * 180 });
  });

  // Reveal on scroll
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 32,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  // Staggered children (cards in a grid)
  gsap.utils.toArray('[data-stagger]').forEach((group) => {
    gsap.from(group.children, {
      y: 24,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: { trigger: group, start: 'top 85%' },
    });
  });
}
