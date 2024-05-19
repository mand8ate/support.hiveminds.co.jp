import { useMotionValue, useTransform } from "framer-motion";

export function useGradientEffect(
  gradientColor: string,
  transparency: number = 0.2,
  transparentAt: number = 60,
) {
  const gradientX = useMotionValue(0);
  const gradientY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    gradientX.set(x);
    gradientY.set(y);
  };

  const gradientStyle = useTransform([gradientX, gradientY], ([x, y]) => {
    return `radial-gradient(circle at ${x}% ${y}%, ${gradientColor} ${transparency * 100}%, transparent ${transparentAt}%)`;
  });

  return { gradientStyle, handleMouseMove };
}
