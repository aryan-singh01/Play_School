export default function Squiggle({ color = "var(--color-marigold)" }: { color?: string }) {
  return (
    <svg viewBox="0 0 200 20" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 14C20 4 36 4 52 12C68 20 84 20 100 10C116 0 132 0 148 9C164 18 180 18 198 8"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
