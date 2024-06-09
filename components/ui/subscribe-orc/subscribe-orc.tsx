"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function SubscribeOrc() {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);

  return (
    <div className="fixed bottom-0 right-0 w-32 md:w-64">
      {isShowDialog && (
        <div className="nes-balloon from-right w-44">
          <p className="text-xs">Subscribe!</p>
        </div>
      )}

      <Link href={"#"}>
        <Image
          onMouseEnter={() => setIsShowDialog(true)}
          onMouseLeave={() => setIsShowDialog(false)}
          src={"/pixel-orc.webp"}
          width={300}
          height={300}
          alt="Orc"
        />
      </Link>
    </div>
  );
}
