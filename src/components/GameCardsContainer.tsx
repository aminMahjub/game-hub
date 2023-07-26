import { ReactNode } from "react";

const GameCardsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card w-96 bg-base-200 shadow-xl max-h-96">
      {children}
    </div>
  );
};

export default GameCardsContainer;
