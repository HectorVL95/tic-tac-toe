'use client'

import { RecoilRoot } from "recoil";
import Main from "./components/Main";

export default function Home() {

  return (
    <RecoilRoot>
      <Main/>
    </RecoilRoot>
  );
}
