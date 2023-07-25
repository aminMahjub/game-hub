import { ReactNode } from "react";

const GameCardsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content shadow-xl max-h-96">
      {children}
    </div>
  );
};

export default GameCardsContainer;
