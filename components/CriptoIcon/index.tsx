"use client";

import React, { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

interface TCriptoIcon extends ImageProps {
  fallbackSrc: string;
}

const CriptoIcon = (props: TCriptoIcon) => {
  const { src, alt, fallbackSrc, ...rest } = props;
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={() => setError(true)}
      src={error ? fallbackSrc : src}
      {...rest}
      priority
    />
  );
};

export default CriptoIcon;
