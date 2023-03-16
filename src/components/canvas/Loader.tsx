import { Html, useProgress } from "@react-three/drei";

export const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" className="flex flex-col items-center justify-center" center>
      <span className="canvas-loader animate-[mulShdSpinDark_1.1s_infinite_ease] dark:animate-[mulShdSpin_1.1s_infinite_ease]"></span>
      <p className="mt-6 text-sm font-extrabold">{progress.toFixed(2)}%</p>
    </Html>
  );
};
