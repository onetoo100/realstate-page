import { FC, HTMLProps } from "react";

interface ImageComponentProps extends HTMLProps<HTMLImageElement> {
  imageUrl: string;
  altText?: string;
  crossOrigin?: "anonymous" | "use-credentials";
}

const ImageComponent: FC<ImageComponentProps> = ({
  imageUrl,
  altText,
  crossOrigin,
  className,
  ...props
}) => {
  const imageClasses = `imageComponent ${className || ""}`;

  return (
    <img
      src={imageUrl}
      alt={altText || ""}
      className={imageClasses}
      crossOrigin={crossOrigin}
      {...props}
    />
  );
};

export default ImageComponent;
