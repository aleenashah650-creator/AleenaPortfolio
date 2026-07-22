import { useCursorGlow } from "../hooks/useCursorGlow";

export default function CursorGlow() {
  const { x, y } = useCursorGlow();
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(242,133,0,0.06), transparent 60%)`,
        transition: "background 0.1s ease-out",
      }}
    />
  );
}
