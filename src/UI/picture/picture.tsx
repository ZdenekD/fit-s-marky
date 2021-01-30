import Image from 'next/image';

interface IPicture {
    src: string
    width?: number
    height?: number
    alt?: string
    layout?: 'fixed' | 'intrinsic' | 'responsive' | undefined
    className?: string
}

const Picture: React.FC<IPicture> = ({
    src,
    width = 1024,
    height = 683,
    alt = '',
    layout = 'intrinsic',
    className = '',
}) => (
    <Image src={src} width={width} height={height} alt={alt} layout={layout} className={className} quality={90} />
);

export default Picture;
