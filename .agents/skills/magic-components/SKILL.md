---
name: magic-components
description: Library of modern animated UI components with Framer Motion, glowing neon borders, 3D tilt effects, spotlight cards, and spring pop-ups.
---

# Magic Components Skill

This skill provides instruction and patterns for implementing state-of-the-art interactive web components using Framer Motion and CSS keyframes.

## Key Component Patterns

### 1. Spotlight Card with Mouse Follower Glow
Cards that track mouse cursor position to illuminate glowing borders and glassmorphism gradients.

```tsx
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function SpotlightCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative rounded-2xl border border-white/10 bg-slate-900/80 p-8 backdrop-blur-xl transition-colors hover:border-purple-500/40"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}
```

### 2. 3D Parallax Tilt Card
Cards that tilt in 3D space based on mouse position.

```tsx
import { motion, useMotionValue, useTransform } from "framer-motion";

export function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative rounded-2xl bg-gradient-to-b from-purple-900/40 to-slate-950 p-6 shadow-2xl border border-purple-500/20"
    >
      {children}
    </motion.div>
  );
}
```

### 3. Dynamic Typing Headline
Typing animation cycling through multiple phrases.

### 4. Interactive Accordion (FAQ)
AnimatePresence height collapse with spring physics.
