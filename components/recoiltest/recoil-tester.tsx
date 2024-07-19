"use client";

import { useRecoilState } from "recoil";
import { myAtom } from "../store/store";
import { Button } from "../ui/button";

const RecoilTester = () => {
  const [value, setValue] = useRecoilState(myAtom);
  const handleClick = () => {
    setValue((prevValue: number) => {
      return prevValue + 1;
    });
  };
  return (
    <div>
      <Button onClick={handleClick}>{value}</Button>
    </div>
  );
};

export { RecoilTester };

// admin/test/recoil
