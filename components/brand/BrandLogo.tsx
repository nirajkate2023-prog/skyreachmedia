import React from 'react';
import Image from 'next/image';

type BrandLogoVariant = 'mark' | 'horizontal' | 'stacked';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  size?: number;
  className?: string;
  glow?: boolean;
  priority?: boolean;
  alt?: string;
}

const ASSETS: Record<BrandLogoVariant, { src: string; width: number; height: number }> = {
  mark: { src: '/brand/skyreach-mark.png', width: 457, height: 411 },
  horizontal: { src: '/brand/skyreach-logo-horizontal.png', width: 668, height: 139 },
  stacked: { src: '/brand/skyreach-logo.png', width: 488, height: 610 },
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'mark',
  size,
  className = '',
  glow = false,
  priority = false,
  alt = 'SkyReach Media',
}) => {
  const asset = ASSETS[variant];

  if (variant === 'mark') {
    const box = size ?? 48;
    return (
      <span
        className={`relative inline-flex items-center justify-center select-none ${className}`}
        style={{ width: box, height: box }}
      >
        {glow && (
          <span
            className="absolute inset-0 rounded-full bg-brand-orange/25 blur-xl pointer-events-none"
            aria-hidden="true"
          />
        )}
        <Image
          src={asset.src}
          alt={alt}
          width={asset.width}
          height={asset.height}
          priority={priority}
          className="relative w-full h-full object-contain drop-shadow-md"
        />
      </span>
    );
  }

  return (
    <Image
      src={asset.src}
      alt={alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      style={size != null ? { height: size, width: 'auto' } : undefined}
      className={`object-contain drop-shadow-md ${className}`}
    />
  );
};
