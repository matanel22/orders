import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cleanup?: () => void;
}

const OnClickOutsideModal = ({
  children,
  isModalOpen,
  setIsModalOpen,
  cleanup = () => {},
}: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setIsModalOpen(false);
    cleanup();
  });

  return (
    isModalOpen && (
      <AllWindowRange>
        <div ref={ref}>{children}</div>
      </AllWindowRange>
    )
  );

  function useOnClickOutside(
    ref: React.RefObject<HTMLDivElement>,
    handler: (event: Event) => void
  ) {
    useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
};

export default OnClickOutsideModal;

const AllWindowRange = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); // Optional: To add a backdrop effect
`;
